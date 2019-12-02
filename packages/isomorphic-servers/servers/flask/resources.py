from flask_restful import Resource, reqparse
from flask_jwt_extended import (create_access_token, create_refresh_token,
                                jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)

parser = reqparse.RequestParser()
parser.add_argument(
    'username', help='This field cannot be blank', required=True)
parser.add_argument(
    'password', help='This field cannot be blank', required=True)


class UserLogin(Resource):
    def post(self):
        data = parser.parse_args()
        # Just add any model and you can then check database User
        # current_user = UserModel.find_by_username(data['username'])
        current_user = {
            'username': 'demo@gmail.com',
            'password': 'demodemo'
        }

        if not current_user:
            return {'message': 'User {} doesn\'t exist'.format(data['username'])}

        if data['username'] == current_user['username'] and data['password'] == current_user['password']:
            access_token = create_access_token(identity=data['username'])
            return {
                'token': access_token,
            }
        else:
            return {'message': 'Wrong credentials'}


class TokenRefresh(Resource):
    @jwt_refresh_token_required
    def post(self):
        current_user = get_jwt_identity()
        access_token = create_access_token(identity=current_user)
        return {'token': access_token}


class SecretResource(Resource):
    @jwt_required
    def post(self):
        return {
            'status': 200
        }
