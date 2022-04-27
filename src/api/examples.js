import apiUrl from '../apiConfig'
import axios from 'axios'

export const getExamples = (id) => {
  return axios({
    url: apiUrl + `/examples/${id}`,
    method: 'GET'
  })
}

export const createExample = (body) => {
  console.log(body)
  return axios({
    url: apiUrl + '/examples/',
    method: 'POST',
    headers: { Authorization: `Bearer ${body.owner.token}` },
    data: {
      message: {
        board: body.board,
        text: body.text,
        owner: body.owner
      }
    }
  })
}

export const deleteExample = (id, user) => {
  return axios({
    url: apiUrl + `/examples/${id}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${user.token}` }
  })
}

export const changeExample = (id, text, user) => {
  return axios({
    url: apiUrl + `/examples/${id}`,
    headers: { Authorization: `Bearer ${user.token}` },
    method: 'PATCH',
    data: {
      message: {
        text
      }
    }
  })
}
