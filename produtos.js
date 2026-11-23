const PRODUTOS = [
  {
    id: 1,
    categoria: "perifericos",
    tag: "Mouse Sem Fio",
    titulo: "Logitech G305 Lightspeed Sem Fio",
    resumo: "Sensor HERO de 12.000 DPI com resposta de 1 ms e autonomia para meses com apenas 1 pilha AA.",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_716422-MLA40076554840_122019-F.webp",
    linkAfiliado: "https://mercadolivre.com/sec/SEU_LINK_AQUI",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_842909-MLA54965667489_042023-F.webp",
    linkAfiliado: "https://mercadolivre.com/sec/SEU_LINK_AQUI",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_652931-MLU72637837959_112023-F.webp",
    linkAfiliado: "https://mercadolivre.com/sec/SEU_LINK_AQUI",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_952524-MLA46542392074_062021-F.webp",
    linkAfiliado: "https://mercadolivre.com/sec/SEU_LINK_AQUI",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_892266-MLU74123699679_012024-F.webp",
    linkAfiliado: "https://mercadolivre.com/sec/SEU_LINK_AQUI",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_784402-MLB51839317974_102022-F.webp",
    linkAfiliado: "https://mercadolivre.com/sec/SEU_LINK_AQUI",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_952165-MLB43690319874_102020-F.webp",
    linkAfiliado: "https://mercadolivre.com/sec/SEU_LINK_AQUI",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_632189-MLB49844871264_052022-F.webp",
    linkAfiliado: "https://mercadolivre.com/sec/SEU_LINK_AQUI",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_716882-MLB46642191294_072021-F.webp",
    linkAfiliado: "https://mercadolivre.com/sec/SEU_LINK_AQUI",
    beneficios: [
      "Alta durabilidade mecânica para fluxo intenso de impressão em PDVs e totens de senha.",
      "Sistema drop-in de troca rápida de bobina térmica de 80mm.",
      "Compatibilidade nativa com Windows, Linux e comandos ESC/POS."
    ]
  }
];