const fs = require('fs');
const path = require('path');

const base = "c:\\Users\\franc\\Documents\\Manuais-ifsp\\docs\\2024-2-GestaoNutricionalIFSP";

const categories = {
    "alimento": "Alimentos",
    "cardapio": "Cardápios",
    "contrato": "Contratos",
    "empenho": "Empenhos",
    "fornecedor": "Fornecedores",
    "introducao": "Introdução",
    "login": "Acesso ao Sistema",
    "pedido": "Pedidos",
    "perfis-usuario": "Perfis de Usuário",
    "prato": "Pratos",
    "produto": "Produtos"
};

for (const [key, value] of Object.entries(categories)) {
    const folder = path.join(base, key);
    if (fs.existsSync(folder)) {
        const jsonPath = path.join(folder, "_category_.json");
        const data = JSON.stringify({ label: value }, null, 2);
        fs.writeFileSync(jsonPath, data, 'utf8');
        console.log(`Updated ${jsonPath}`);
    }
}
