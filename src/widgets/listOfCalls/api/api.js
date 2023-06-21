const url = 'https://api.skilla.ru/mango/getList'

export const fetchLists = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer testtoken',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      date_start: '20220417',
      date_end: '20220420',
      in_out: ''
    })
  });

  if (!response.ok) {
    throw Error(response.statusText)
  }

  const data = await response.json()
  return data.results

}