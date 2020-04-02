provider "docker" {
  version = "2.7"
}

resource "docker_network" "app-network" {
  name = "app-network"
}

resource "docker_container" "web" {
  name = "web"
  image = "tjmgregory/docker-node-test:1.0"
  restart = "always"
  ports {
    internal = "80"
    external = "8080"
  }
  networks_advanced {
    name = "app-network"
  }
}

resource "docker_container" "postgres" {
  name = "postgres"
  image = "postgres:12.2"
  restart = "always"
  env = ["POSTGRES_PASSWORD=password"]
  networks_advanced {
    name = "app-network"
  }
  volumes {
    host_path = "/Users/theo/learning/postgres_data"
    container_path = "/var/lib/postgresql/data"
  }
  ports {
    internal = "5432"
    external = "6969"
  }
} 
