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

