# Full-Stack ToDo Application With Kubernetes Deployment
<p>
This was a learning todo application built with more focus on the devops side,where I used kubernetes
for deploying the application locally. With this application, you can add your tasks, update tasks as completed or not completed, delete the tsk
once completed and also you could search the tasks.
THe UI is pretty minimalistic with a feel-good macbook theme
</p>

<img  style="border-radius:'22px'" width="1723" height="1005" alt="image" src="https://github.com/user-attachments/assets/070ad5c6-02e2-4e43-91d9-bc76902b479f" />

## Features
<ol>
  <li>
    <b>CRUD Tasks: </b> Users can create tasks by entering the title and press enter or click on Add Button, also they can update,delete and search the tasks.
    
  </li>
  <li>
    <b>Tasks Statistics Dashboard: </b> Users can view the total no of tasks created and total no of tasks completed.
  </li>

  <li>
    <b>macOS-inspired UI</b> Clean & minimalistic ui design inspired by MacOS
  </li>

  <li>
   <b> Data Validation : </b>  Utlised pydantic to validate fields,types, and defautl values and serialization.
  </li>

  <li>
    <b> Kubernetes Persistent Volume Support </b>
      Data survives pod restart,deployment restart
    
  </li>

  <li>
    <b>Containerization:</b>
      Frontend and  Backend are both separately containerised , making them isolated, consistent in depoyment and environment.
  </li>

  <li>
    <b>Docker Hub:</b> Pushed to the container registry Docker Hub 
  </li>
  
</ol>


## Project Structure

``` code
FullStackToDo

├── backend
|
├── frontend
│
├── k8s
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   └── pvc.yaml
│
├── .github
│   └── workflows
│
└── README.md

```



## Commands

### Environment Commands
<b>1. Python Virtual Environment </b>
```code
  python -m venv venv
 ```
<b>2. Activate Virtual Environment </b>
```code
  source venv/bin/activate
 ```
<b>3. Install requiremnts </b>
```code
  pip install -r requirements.txt
 ```

<hr/>

### Docker commands

<b>Build Image</b>
```code
docker build -t todo-backend ./backend

docker build -t todo-frontend ./frontend

```
<b>List Image</b>
```code
docker images

```
<b>Remove container</b>
```code
docker rm container-id

```
<b>Remove Image</b>
```code
docker rmi image-id

```
<b>View Logs</b>
```code
docker logs container-id

```
<b>Enter container</b>
```code
docker exec -it container-id bash

```
<hr/>

### Docker Hub Commands

<b>Login </b>
```code
docker login
```

<b>Tag image</b>
```code
docker tag todo-backend sidd200/todo-backend:latest

docker tag todo-frontend sidd200/todo-frontend:latest
```

<b>Push image </b>
```code
docker push docker-username/repo-name:latest

docker push docker-username/repo-name:latest
```

<b>Pull image </b>
```code
docker pull sidd200/todo-backend:latest
```

<b> Logout </b>
```code
docker logout
```


## Kubernetes Commands

```code

# Start cluster
minikube start

# Check cluster status
minikube status

# Stop cluster
minikube stop

# Delete cluster completely
minikube delete

# Get minikube IP
minikube ip

# Open service in browser
minikube service <service-name>

# Open Kubernetes dashboard
minikube dashboard




# Apply a single yaml
kubectl apply -f file.yaml

# Apply all yamls in a folder
kubectl apply -f k8s/

# Apply without validation
kubectl apply -f file.yaml --validate=false

# Delete a resource file
kubectl delete -f file.yaml

# Delete all resources in folder
kubectl delete -f k8s/



# List pods
kubectl get pods

# Watch pods continuously
kubectl get pods -w

# Show detailed pod information
kubectl describe pod <pod-name>

# View pod logs
kubectl logs <pod-name>

# View logs using label selector
kubectl logs -l app=<label>

# Enter a pod
kubectl exec -it <pod-name> -- sh

# Delete a pod
kubectl delete pod <pod-name>

# Delete pods by label
kubectl delete pod -l app=<label>




# List deployments
kubectl get deployments

# Describe deployment
kubectl describe deployment <deployment-name>

# Restart deployment
kubectl rollout restart deployment <deployment-name>

# Check rollout status
kubectl rollout status deployment <deployment-name>

# View rollout history
kubectl rollout history deployment <deployment-name>

# Scale deployment
kubectl scale deployment <deployment-name> --replicas=<number>

# Delete deployment
kubectl delete deployment <deployment-name>



# List services
kubectl get svc

# List services (full name)
kubectl get services

# Describe service
kubectl describe svc <service-name>

# Delete service
kubectl delete service <service-name>



# List persistent volume claims
kubectl get pvc

# Describe PVC
kubectl describe pvc <pvc-name>

# Delete PVC
kubectl delete pvc <pvc-name>

# List persistent volumes
kubectl get pv

# Describe persistent volume
kubectl describe pv <pv-name>




# List namespaces
kubectl get namespaces

# Create namespace
kubectl create namespace <name>

# Delete namespace
kubectl delete namespace <name>




# Cluster information
kubectl cluster-info

# Cluster nodes
kubectl get nodes

# Describe node
kubectl describe node <node-name>

# Current context
kubectl config current-context

# All contexts
kubectl config get-contexts




# Show all resources
kubectl get all

# Events
kubectl get events

# Watch events
kubectl get events --watch

# Explain resource yaml structure
kubectl explain deployment
kubectl explain service
kubectl explain pod
kubectl explain pvc

# Check API resources
kubectl api-resources
```



### Kubernetes PArt (k8s)
# Kubernetes Deployment Documentation

---

# 1. <div style="display:'flex';justify-content:'start'; align-items:'center'"> <img src="https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png" width="50" /> Kubernetes Overview </div>

**Kubernetes (K8s)** is a container orchestration platform that automates the deployment, scaling, networking, storage, and management of containerized applications. Instead of manually running Docker containers on servers, Kubernetes manages the complete lifecycle of applications by distributing containers across cluster nodes, monitoring their health, restarting failed containers, providing networking, and managing persistent storage.

In this project, Kubernetes was used through **Minikube** to deploy a full-stack Todo application consisting of:

* React frontend
* FastAPI backend
* SQLite database
* Persistent storage using Persistent Volume Claims

---

# 2. Kubernetes Terminologies

| Term                          | Definition                                                 |
| ----------------------------- | ---------------------------------------------------------- |
| Cluster                       | A collection of machines running Kubernetes                |
| Node                          | A machine (physical or virtual) inside a cluster           |
| Pod                           | Smallest deployable unit containing one or more containers |
| Deployment                    | Manages pod creation, updates, and self-healing            |
| ReplicaSet                    | Ensures the desired number of pod replicas exist           |
| Service                       | Provides stable networking to pods                         |
| ClusterIP                     | Internal service accessible only inside cluster            |
| NodePort                      | Exposes service externally through node IP and port        |
| Persistent Volume (PV)        | Actual storage resource                                    |
| Persistent Volume Claim (PVC) | Request for storage                                        |
| Namespace                     | Logical isolation within cluster                           |
| Labels                        | Key-value tags attached to objects                         |
| Selectors                     | Used to identify resources using labels                    |
| Volume                        | Storage mounted inside container                           |
| ConfigMap                     | Stores non-sensitive configuration                         |
| Secret                        | Stores sensitive data                                      |

---

# 3. Backend Deployment

```yaml
apiVersion: apps/v1
kind: Deployment

metadata:
  name: todo-backend

spec:
  replicas: 1

  selector:
    matchLabels:
      app: todo-backend

  template:
    metadata:
      labels:
        app: todo-backend

    spec:
      containers:
        - name: backend
          image: sidd200/todo-backend:latest

          ports:
            - containerPort: 8000

          volumeMounts:
            - name: todo-storage
              mountPath: /data

      volumes:
        - name: todo-storage
          persistentVolumeClaim:
            claimName: todo-pvc
```

## Explanation

### apiVersion

Specifies which Kubernetes API version to use.

```text
apps/v1
```

---

### kind

Defines the type of Kubernetes object.

```text
Deployment
```

---

### metadata

Contains information describing the resource.

```yaml
metadata:
  name: todo-backend
```

---

### replicas

Specifies how many pod instances should exist.

```yaml
replicas: 1
```

---

### selector

Used by Deployment to identify pods it controls.

```yaml
selector:
  matchLabels:
    app: todo-backend
```

---

### template

Defines how new pods should be created.

---

### labels

Assigns labels to pods.

```yaml
labels:
  app: todo-backend
```

---

### containers

List of containers to run inside the pod.

---

### image

Docker image to pull.

```yaml
image:
  sidd200/todo-backend:latest
```

---

### containerPort

Application port inside container.

```yaml
containerPort: 8000
```

---

### volumeMounts

Mounts storage into container filesystem.

```yaml
mountPath: /data
```

---

### volumes

Connects pod storage to PVC.

```yaml
persistentVolumeClaim:
  claimName: todo-pvc
```

---

# 4. Backend Service

```yaml
apiVersion: v1
kind: Service

metadata:
  name: todo-backend-service

spec:
  selector:
    app: todo-backend

  ports:
    - port: 8000
      targetPort: 8000

  type: NodePort
```

## Explanation

### Service

Provides stable networking for pods.

---

### selector

Selects pods matching:

```text
app=todo-backend
```

---

### port

Internal cluster service port.

```yaml
port: 8000
```

---

### targetPort

Container port.

```yaml
targetPort: 8000
```

---

### NodePort

Creates an external port.

Example:

```text
31445
```

allowing:

```text
Browser
    ↓
192.168.49.2:31445
    ↓
Backend Pod
```

---

# 5. Frontend Deployment

```yaml
apiVersion: apps/v1
kind: Deployment

metadata:
  name: todo-frontend

spec:
  replicas: 1

  selector:
    matchLabels:
      app: todo-frontend

  template:
    metadata:
      labels:
        app: todo-frontend

    spec:
      containers:
        - name: frontend
          image: sidd200/todo-frontend:latest

          ports:
            - containerPort: 80
```

## Explanation

Same concepts as backend deployment.

Only differences:

```text
Image:
    todo-frontend

Port:
    80 (Nginx)
```

---

# 6. Frontend Service

```yaml
apiVersion: v1
kind: Service

metadata:
  name: todo-frontend-service

spec:
  selector:
    app: todo-frontend

  ports:
    - port: 80
      targetPort: 80

  type: NodePort
```

## Explanation

Creates an external endpoint:

```text
192.168.49.2:30080
```

which forwards requests to frontend pods.

---

# 7. Persistent Volume Claim

```yaml
apiVersion: v1
kind: PersistentVolumeClaim

metadata:
  name: todo-pvc

spec:
  accessModes:
    - ReadWriteOnce

  resources:
    requests:
      storage: 1Gi
```

## Explanation

### PersistentVolumeClaim

Requests persistent storage.

---

### accessModes

```yaml
ReadWriteOnce
```

Means:

```text
One node can mount it
for read/write.
```

---

### storage

Requested storage size.

```yaml
1Gi
```

---

# 8. Kubernetes Networking and IP Configuration

---

## Pod IP

Every pod receives its own IP.

Example:

```text
Backend Pod
10.244.0.5

Frontend Pod
10.244.0.6
```

However pod IPs are temporary.

---

## Service IP

Services receive stable IPs.

Example:

```text
todo-backend-service

10.103.17.45
```

Pods can restart:

```text
10.244.0.5
       ↓
10.244.0.8
```

but service IP remains:

```text
10.103.17.45
```

---

## Cluster DNS

Kubernetes automatically creates DNS entries.

Example:

```text
todo-backend-service
```

resolves to:

```text
10.103.17.45
```

Thus frontend can call:

```javascript
http://todo-backend-service:8000/todos
```

instead of using pod IPs.

---

## NodePort

NodePort exposes services externally.

Example:

```text
Browser
     ↓
192.168.49.2:31445
     ↓
NodePort Service
     ↓
Backend Pod
```

---

# 9. Application Flow

```text
Browser
   |
   |
30080
   |
Frontend Service
   |
Frontend Pod
   |
31445
   |
Backend Service
   |
Backend Pod
   |
SQLite
   |
Persistent Volume
```

---

# 10. Failure Scenario

Suppose backend pod crashes.

```text
Backend Pod
      X
```

Deployment detects:

```text
Desired replicas = 1
Actual replicas = 0
```

Kubernetes creates:

```text
New Backend Pod
```

automatically.

---

# 11. Pod Deletion Scenario

```bash
kubectl delete pod -l app=todo-backend
```

Kubernetes:

```text
Deletes Pod
      ↓
Deployment notices
      ↓
Creates new Pod
      ↓
Attaches same PVC
      ↓
Database survives
```

---

# 12. Image Update Scenario

Suppose frontend changes.

### Step 1

Build image:

```bash
docker build -t todo-frontend ./frontend
```

---

### Step 2

Tag image:

```bash
docker tag todo-frontend sidd200/todo-frontend:v2
```

---

### Step 3

Push image:

```bash
docker push sidd200/todo-frontend:v2
```

---

### Step 4

Update deployment:

```yaml
image:
  sidd200/todo-frontend:v2
```

---

### Step 5

Apply:

```bash
kubectl apply -f frontend-deployment.yaml
```

---

### Step 6

Kubernetes performs rolling update:

```text
Old Pod Running

Create New Pod
       ↓
Verify Healthy
       ↓
Delete Old Pod
```

---

# 13. Complete Lifecycle

```text
Write Code
     ↓
Build Docker Image
     ↓
Push To DockerHub
     ↓
Apply Kubernetes YAML
     ↓
Deployment Creates Pods
     ↓
Service Creates Networking
     ↓
PVC Creates Storage
     ↓
Application Runs
     ↓
Pod Failure
     ↓
Automatic Recovery
     ↓
New Image Push
     ↓
Rolling Update
```

