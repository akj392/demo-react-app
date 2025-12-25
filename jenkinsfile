pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/akj392/demo-react-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'yarn install --frozen-lockfile'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build:dev'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh '''
                rm -rf /var/www/html/*
                cp -r build/* /var/www/html/
                sudo systemctl reload nginx
                '''
            }
        }
    }

    post {
        success {
            echo '✅ React app deployed successfully'
        }
        failure {
            echo '❌ Build failed'
        }
    }
}
