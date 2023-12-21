# Use Node.js v20.5.1 as the base image
FROM node:20.5.1

# Set build-time variables
# ARG NEXT_PUBLIC_COGNITO_USER_POOL
# ARG NEXT_PUBLIC_COGNITO_USER_CLIENT

# Set runtime environment variables
# ENV NEXT_PUBLIC_COGNITO_USER_POOL=${NEXT_PUBLIC_COGNITO_USER_POOL}
# ENV NEXT_PUBLIC_COGNITO_USER_CLIENT=${NEXT_PUBLIC_COGNITO_USER_CLIENT}

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all other project files into the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]