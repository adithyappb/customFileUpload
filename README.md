## CustomFileUpload
CustomFileUpload is a serverless application designed to handle file uploads, process files with user inputs, and store results efficiently using AWS services. This project was developed as part of the InGenius 2018 hackathon at PESU, where it was recognized as one of the top 10 novel ideas.

## Features
1) Responsive Web UI: Built with ReactJS and TailwindCSS (Flowbite).
2) Serverless Architecture: Utilizes AWS services like S3, DynamoDB, Lambda, EC2, and API Gateway.
3) Automated VM Management: VMs are created and terminated dynamically based on events.
4) Secure File Handling: Ensures secure file upload, storage, and processing.
5) Scalable and Cost-Efficient: Uses AWS best practices to optimize resource utilization.

## System Components
# Frontend
1) ReactJS: For the responsive web interface.
2) TailwindCSS (Flowbite): For styling the UI components.

# Backend
1) AWS Lambda: For serverless function execution.
2) AWS API Gateway: To expose APIs securely.
3) AWS S3: For file storage.
4) AWS DynamoDB: For input and output tracking.
5) AWS EC2: For running scripts dynamically.
6) AWS Cognito: For API authentication.

# Prerequisites
1) Node.js (v14 or later)
2) AWS CLI (configured with appropriate permissions)
3) AWS CDK (v2.x)
4) Python (v3.8 or later)

## Setup and Deployment
# Frontend
Navigate to the frontend directory:
cd frontend

Install the dependencies:
npm install

Start the development server:
npm start

# Backend
Navigate to the backend directory:
cd backend

Install the dependencies:
pip install -r requirements.txt

Deploy the backend services using AWS CDK:
cdk deploy
Infrastructure

Navigate to the infrastructure directory:
cd infrastructure

Deploy the necessary infrastructure using Terraform:
terraform init
terraform apply
