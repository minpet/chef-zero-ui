pipeline {
 options {
  buildDiscarder(logRotator(artifactNumToKeepStr: '2', numToKeepStr: '12'))
 }
 agent any
 stages {
  stage("Install depedencies"){
   steps {
     sh label: 'Install Dependencies', script: 'npm install'
   }
  }
  stage("Full Release"){
   steps {
     sh label: 'Build binaries', script: 'ng build --prod'
     sh label: 'Create ZIP', script: 'cd dist/chef-zero-ui && zip -r webapp.zip *'
   }
  }
  stage("Artifact"){
   steps {
    archiveArtifacts artifacts: 'dist/chef-zero-ui/webapp.zip', onlyIfSuccessful: true
   }
  }
 }
}
