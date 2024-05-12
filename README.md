# Project Name

Packet Tracer Frontend Application
This repository contains the frontend application logic  for displaying IPv4 and IPv6 packets received from websocket application using React, as well as monitoring the amount of packets received. The application is containerized using Docker and was deployed to Azure Kubernetes Service (AKS) using GitHub Actions CI/CD pipeline.

## Overview
This project automates the provisioning and deployment of infrastructure and applications to Azure Kubernetes Service (AKS) using GitHub Actions. It provides a streamlined workflow for dockerizing and deploying containerized applications on Kubernetes.

## Prerequisites
Before using this project, ensure you have the following:
- Azure account
- Azure Kubernetes Service (AKS) setup
- Azure Container Registry (ACR)
- GitHub account

## Repository Structure
- **deployment.yml**: Contains Kubernetes deployment and service configurations.
- **Dockerfile**: Defines Docker commands for containerizing the application. It automatically triggers when a push is made to the main branch.

## GitHub Actions Workflows

### Deploy to AKS
Handles continuous integration and deployment of the application to the AKS cluster.

- **Trigger**: Pushes and pull requests to the `main` branch.
- **Jobs**:
  - **Build and Deploy**: Builds the Docker image, pushes it to ACR, and deploys it to AKS using `kubectl`.

## Setup and Configuration

### Configuring Secrets
Configure the following GitHub Secrets to use the workflows:

- `ACR_NAME`: Azure Container Registry name.
- `ACR_USERNAME`: Azure Container Registry username.
- `ACR_PASSWORD`: Azure Container Registry password.
- `AZURE_CREDENTIALS`: Azure credentials in JSON format for AKS authentication.

