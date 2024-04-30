const BASE_URL = 'https://koreanjson.com/';

export async function getUserList(){
    const url = `${BASE_URL}users`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    return data;
}

export async function getUserDetail(id) {

    const url = `${BASE_URL}users/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    return data;
}