const awsconfig = {
    Auth: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_yY1ORUT1I',
      userPoolWebClientId: '2e5hqoi8m0024d81jvvms1dlh5',
      authenticationFlowType: 'USER_PASSWORD_AUTH',
    },
    API: {
      endpoints: [
        {
          name: "FileUploadApi",
          endpoint: "https://m6gcu28sif.execute-api.us-east-2.amazonaws.com/prod"
        }
      ]
    },
    Storage: {
      AWSS3: {
        bucket: 'backendstack-fileuploadbucketdf219b4d-qy6ujepz3u8c',
        region: 'us-east-2'
      }
    }
  };
  
  export default awsconfig;

  