from flask import Flask
from flask_restful import Api
from flask_jwt_extended import JWTManager


app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'secretKey'
jwt = JWTManager(app)
api = Api(app)

# import models
import resources

api.add_resource(resources.UserLogin, '/api/login')
api.add_resource(resources.TokenRefresh, '/refresh')
api.add_resource(resources.SecretResource, '/api/secret/test')
