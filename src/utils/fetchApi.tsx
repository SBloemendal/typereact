export default async function getPokemon(url: string, search?: string) {
  url = search ? url + search : url + "?limit=10000";
  return await fetch(url, { cache: "force-cache" })
    .then(async (response) => {
      if (response.status === 200) {
        const jsonResp = await response.json();
        return jsonResp.results;
      } else {
        return response.status;
      }
    })
    .catch(({ message }) => {
      console.log(message);
    });
}
