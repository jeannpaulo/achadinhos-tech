const PRODUTOS = [
  {
    id: 1,
    categoria: "perifericos",
    tag: "Mouse Sem Fio",
    titulo: "Logitech G305 Lightspeed Sem Fio",
    resumo: "Sensor HERO de 12.000 DPI com resposta de 1 ms e autonomia para meses com apenas 1 pilha AA.",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_621691-MLU69339333840_052023-F.webp",
    linkAfiliado: "https://meli.la/1CZuqai",
    beneficios: [
      "Conexão Lightspeed 2.4 GHz sem atraso perceptível, equivalente a mouses com cabo.",
      "Pesando apenas 99g, oferece excelente controle para trabalho e jogos.",
      "Compartimento interno para guardar o receptor USB durante viagens."
    ]
  },
  {
    id: 2,
    categoria: "perifericos",
    tag: "Monitor",
    titulo: "Monitor LG 29\" UltraWide IPS Full HD (29WQ500B)",
    resumo: "Tela 21:9 (2560x1080) com painel IPS 99% sRGB, 100Hz e 1ms para produtividade e multitarefa.",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_711117-MLA93401025274_092025-F.webp",
    linkAfiliado: "https://meli.la/1tSjXKt",
    beneficios: [
      "Permite abrir duas ou três janelas lado a lado com folga, ideal para código e planilhas.",
      "Painel IPS com fidelidade de cores (99% sRGB) e modo leitura contra fadiga ocular.",
      "Taxa de 100Hz e tempo de resposta de 1ms garantem fluidez extra."
    ]
  },
  {
    id: 3,
    categoria: "perifericos",
    tag: "Microfone",
    titulo: "Microfone Dinâmico Fifine AM8 USB/XLR",
    resumo: "Captação cardióide que isola ruídos de fundo, com conexão dupla USB-C e XLR.",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_781483-MLB115314085574_082026-F-microfone-fifine-am8-usb-xlr-dinamico-rgb-cardioide-gamer.webp",
    linkAfiliado: "https://meli.la/1RUvkMB",
    beneficios: [
      "Por ser dinâmico, rejeita barulhos de teclado mecânico, ventoinhas e eco do quarto.",
      "Funciona plug-and-play no USB ou ligado em interfaces profissionais via XLR.",
      "Botão touch de mudo rápido e saída P2 para retorno de áudio sem latência."
    ]
  },
  {
    id: 4,
    categoria: "perifericos",
    tag: "Teclado Mecânico",
    titulo: "Teclado Mecânico Gamer Redragon Dark Avenger RGB",
    resumo: "Formato compacto TKL (sem teclado numérico) com switches mecânicos e sistema anti-ghosting.",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_891124-MLA99987174875_112025-F.webp",
    linkAfiliado: "https://meli.la/2fKCtt3",
    beneficios: [
      "Design compacto libera mais espaço na mesa para movimentar o mouse.",
      "Construção robusta com teclas de resposta rápida e durabilidade elevada.",
      "Iluminação RGB configurável para uso confortável à noite."
    ]
  },
  {
    id: 5,
    categoria: "perifericos",
    tag: "Armazenamento",
    titulo: "SSD NVMe M.2 1TB Alta Velocidade",
    resumo: "Leitura acima de 3.500 MB/s para inicialização instantânea do sistema e carregamento rápido.",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_676593-MLA99492778088_112025-F.webp",
    linkAfiliado: "https://meli.la/2eWtYMJ",
    beneficios: [
      "Até 7x mais rápido que SSDs SATA convencionais e dezenas de vezes mais rápido que HD.",
      "Instalação direta na placa-mãe sem necessidade de cabos de dados ou energia.",
      "Totalmente silencioso e resistente a impactos."
    ]
  },
  {
    id: 6,
    categoria: "automacao",
    tag: "Microcontrolador IoT",
    titulo: "Placa de Desenvolvimento ESP32 (38 Pinos) Wi-Fi + Bluetooth",
    resumo: "Microcontrolador dual-core de baixo consumo ideal para telemetria, relés e projetos IoT.",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_658668-MLB111546332251_052026-F-esp32-devkit-modulo-microcontrolador-wroom32-memoria-placa.webp",
    linkAfiliado: "https://meli.la/2fumZfW",
    beneficios: [
      "Wi-Fi 2.4 GHz e Bluetooth integrados para enviar dados direto para APIs, MQTT ou InfluxDB.",
      "Versão de 38 pinos oferece mais portas GPIO para sensores, displays e módulos RF.",
      "Excelente custo-benefício para automação residencial e comercial."
    ]
  },
  {
    id: 7,
    categoria: "automacao",
    tag: "Computador Embarcado",
    titulo: "Raspberry Pi 3 Model B (Quad-Core 1.2GHz + Wi-Fi)",
    resumo: "Minicomputador Linux completo para servidores locais, painéis quiosque e automação.",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_896528-MLA99502244606_112025-F.webp",
    linkAfiliado: "https://meli.la/2KxCBG2",
    beneficios: [
      "Roda distribuições Linux leves para painéis de senha, Zabbix proxy ou servidores Node.js.",
      "4 portas USB, saída HDMI full-size, Ethernet e barra de 40 pinos GPIO.",
      "Baixíssimo consumo energético para operação 24/7."
    ]
  },
  {
    id: 8,
    categoria: "automacao",
    tag: "Telemetria",
    titulo: "Sensor de Temperatura DS18B20 à Prova d'Água",
    resumo: "Sonda em aço inoxidável com protocolo 1-Wire e precisão de ±0,5 °C (-55 °C a +125 °C).",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_810991-MLB26096243138_092017-F.webp",
    linkAfiliado: "https://meli.la/2nyyEq8",
    beneficios: [
      "Permite ligar vários sensores no mesmo pino digital do ESP32 graças ao ID único de 64 bits.",
      "Ponta blindada em inox ideal para câmaras frias, balcões refrigerados e racks de servidor.",
      "Sinal digital imune a perdas em cabos mais longos."
    ]
  },
  {
    id: 9,
    categoria: "automacao",
    tag: "Automação Comercial",
    titulo: "Impressora Térmica Não Fiscal Epson TM-T20X (USB/Serial)",
    resumo: "Impressão rápida de 200 mm/s com guilhotina automática para senhas, pedidos e recibos.",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_630729-MLA108925986834_032026-F.webp",
    linkAfiliado: "https://meli.la/2ssL5eD",
    beneficios: [
      "Alta durabilidade mecânica para fluxo intenso de impressão em PDVs e totens de senha.",
      "Sistema drop-in de troca rápida de bobina térmica de 80mm.",
      "Compatibilidade nativa com Windows, Linux e comandos ESC/POS."
    ]
  },
  {
    id: 10,
    categoria: "eletrodomesticos",
    tag: "Geladeira / Refrigerador",
    titulo: "Geladeira Frost Free Duplex Consul 375L (CRM39AK)",
    resumo: "Amplo espaço interno com prateleiras ajustáveis, controle externo de temperatura e baixo consumo.",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_987413-MLB87981816459_072025-F-geladeira-frost-free-duplex-consul-crm44mk.webp",
    linkAfiliado: "https://meli.la/26HqMvM",
    beneficios: [
      "Tecnologia Frost Free que dispensa o descongelamento manual.",
      "Gavetão de legumes com controle de umidade para conservar alimentos por mais tempo.",
      "Classificação energética A com compressor silencioso e econômico.",
      "Otimo Custo X Benefecio para quem busca um refrigerador confiável e eficiente."
    ]
  }
];