import requests

API_KEY = "AIzaSyACGU8OH4quePGNV3YPXuDSnulrGzKC_34"
SEARCH_URL = "https://places.googleapis.com/v1/places:searchText"

headers = {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": API_KEY,
    "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.websiteUri,places.nationalPhoneNumber,places.id",
}


def buscar_estabelecimentos(nicho, cidade, pais):
    query = f"{nicho} em {cidade}, {pais}"

    body = {
        "textQuery": query,
        "maxResultCount": 20,  # Pode ser ajustado
        "languageCode": "pt-BR",
    }

    response = requests.post(SEARCH_URL, headers=headers, json=body)
    data = response.json()

    estabelecimentos = []

    for place in data.get("places", []):
        if "websiteUri" not in place:
            estabelecimentos.append(
                {
                    "nome": place["displayName"]["text"],
                    "cidade": place.get("formattedAddress", "Desconhecida"),
                    "link": place."),
                    "telefone": place.get("nationalPhoneNumber", "Não disponível"),
                }
            )

    return estabelecimentos


resultados = buscar_estabelecimentos("pizzaria", "Curitiba", "Brasil")

for r in resultados:
    print(f"Nome: {r['nome']}")
    print(f"Cidade: {r['cidade']}")
    print(f"Telefone: {r['telefone']}")
    print("-" * 30)
