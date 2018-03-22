export const UPDATE_USER = "user:UPDATEUSER";

export function updateUser (newUser){
	return{
		type: UPDATE_USER,
		payload: newUser
	}
}
