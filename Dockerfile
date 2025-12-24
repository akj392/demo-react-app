# Stage 1: Build the React application
FROM node:22-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# This creates the 'build' folder
RUN npm run build

# Stage 2: Serve the production build with NGINX
FROM nginx:stable-alpine
# Copy the built files from the previous stage to NGINX's web root
COPY --from=build-stage /app/build /usr/share/nginx/html
# Expose port 80 for the web server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]