import jwt

public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1K_twXSRt2AE2C4UYmhmtbCELN5CJyALUXlv2Qnih3avcCWL5D1LJATKVFS-hI4rztrgsNSQCCGiNypY-5GhM-JMg__ptTE5mEf-WhhNXEHMuciGKydAQnglF_q6tvvXEAGjtzWXW4MhQzIyej6OwOyOqFpbGq3IMwdGZh_yabRtMUZ9K98HZkrNjYA4XeIaZcijy9Z_FJj9Givba9sbZjmWF8PxRmtpfZ2jLqv7FieEvMTW6HmEqZjzJEk5oStV0JEl1pSDKLV9GQ0AXuF0WwvhCa3F7ZnegsTsDtkCZV8hbt2aGcz_xO9Pp-RjIcQhEWkB4U-ggucuY52VteUgIw"

token = 'your-jwt-token'

try:
    decoded_token = jwt.decode(token, public_key, algorithms=['RS256'])
    print('Decoded token:', decoded_token)
except jwt.ExpiredSignatureError:
    print('Token has expired')
except jwt.InvalidTokenError:
    print('Token verification failed')
