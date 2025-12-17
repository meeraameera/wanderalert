# WanderAlert

A cloud-based IoT system leveraging AWS for **real-time monitoring and proactive alerts** to prevent wandering incidents among individuals with dementia.  

---

## Problem Statement

The increasing prevalence of **dementia and Alzheimer's disease** globally poses significant challenges for both individuals and caregivers. A critical risk is **wandering**, which can lead to getting lost and being in danger. This requires constant supervision, imposing a considerable **physical and emotional burden** on caregivers.

There is a clear need for a **scalable, reliable, and non-intrusive technological solution** to enhance the safety of individuals with dementia and reduce caregiver stress.

---

## Project Goal

The goal of **WanderAlert** is to develop a cloud-based IoT system using **Amazon Web Services (AWS)** to provide **real-time monitoring and proactive alerting** for potential wandering incidents.  

Key objectives include:

- **Enhance Safety:**
  - Prevent wandering incidents by continuously monitoring door activity and verifying individuals via facial recognition.

- **Alleviate Caregiver Burdens:**
  - Reduce the stress of constant supervision by providing automated, real-time alerts.

- **Provide Timely Alerts:**
  - Utilize **AWS Simple Notification Service (SNS)** to immediately notify caregivers when a potential wandering event is detected.

---

## Technical Approach & Workflow

1. **Authentication:**  
   - Only registered users can log in to the app.  
   - Ensures sensitive data remains secure.

2. **Sensor Trigger:**  
   - Door contact sensor detects door opening.  
   - Facial recognition camera captures an image of the individual.

3. **Data Ingestion:**  
   - Sensor data is forwarded to **AWS IoT Core**, which publishes the events.

4. **Intelligent Processing:**  
   - An **AWS Lambda** function processes the data.  
   - **Amazon Rekognition** verifies the individual’s identity.  
   - Checks if the door is being opened by a registered user.

5. **Alerting:**  
   - If wandering is detected, the Lambda function triggers **AWS SNS** to immediately notify the caregiver.

6. **Logging & Monitoring:**  
   - **DynamoDB** stores event logs.  
   - **S3** stores captured images.  
   - **CloudWatch** monitors system performance and logs.

---

## Key Challenges Faced

- **Alerting Function:**  
  - *Challenge:* Initial implementation of SNS alerting faced issues.  
  - *Solution:* Defaulted to sending notifications via **Email**.
