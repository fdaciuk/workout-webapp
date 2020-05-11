/*
 * COPIAR TDOO O CONTEÚDO DO ARQUIVO .PDF PARA A VARIÁVEL PDF
 * E DEIXAR O SCRIPT FAZER O RESTO ;)
 *
 * No final, vai ser salvo um arquivo chamado videos-extracted.json
 * Só pegar o conteúdo desse arquivo e colar em src/helpers/videos.js
 */

const { writeFileSync } = require('fs')

const pdf = `Leandro Twin
CREF: 128544-G/SP
WhatsApp: (11) 94442-1988
www.leandrotwin.com.br
Vídeos dos Exercícios
Alguns exercícios podem ter nomes diferentes de acordo com região,
portanto para não haver divergências sempre siga conforme aqui!
Peitoral
Exercício Execução em Vídeo
Supino Reto Barra https://youtu.be/sqOw2Y6uDWQ
Supino Reto Halteres https://youtu.be/Spbmm66NsuY
Supino Reto Smith https://youtu.be/b-THwNtIYxY
Supino Inclinado Barra https://youtu.be/lBCjPgnIzKk
Supino Inclinado Halteres https://youtu.be/Z1rCZ0YHrP0
Supino Inclinado Smith https://youtu.be/L4kIk2gMeBw
Supino Declinado Barra https://youtu.be/hZ9woVlzGdA
Supino Declinado Halteres https://youtu.be/0SFB2chQTPY
Supino Declinado Smith https://youtu.be/xLQ9ZbH9ljc
Crucifixo Reto Halteres https://youtu.be/dQi36EfA88c
Crucifixo Inclinado Halteres https://youtu.be/4JvT5Ys1Bog
Crucifixo Declinado Halteres https://youtu.be/QsZ8VYaRh34
Cross-Over Polia Alta https://youtu.be/HNUji0rHFCs
Cross-Over Polia Média https://youtu.be/iLRFLm82dbg
Cross-Over Polia Baixa https://youtu.be/Jy_hZnK-_lo
Flexão De Braço https://youtu.be/F9FC_KBsLpY
Peck Deck ou Crucifixo Na Máquina https://youtu.be/Ru9OVOUlp0U
Dorsais
Exercício Execução em Vídeo
Barra Fixa Peg Pronada https://youtu.be/JX_YM7Bp26U
Barra Fixa Peg Supinada https://youtu.be/WJOu_aru3XM
Barra Fixa Com Triângulo https://youtu.be/uCnmHgHgfOs
Levantamento Terra https://youtu.be/T3x53s0jEns
Puxada Vertical Peg Pronada https://youtu.be/H09EvebBsB4
Puxada Vertical Peg Supinada https://youtu.be/v1rPzvJvwIE
Puxada Vertical Com Triângulo https://youtu.be/ej9Z_jMQpLY
Remada Curvada Peg Pronada https://youtu.be/XruycmUNi1Y
Remada Curvada Peg Supinada https://youtu.be/y-XZnuKx3Q0
Remada Curvada Cavalinho https://youtu.be/Hdqf7mlEHrA
Remada Curvada Halteres Peg Pronada https://youtu.be/AT8pPML17VU
Remada Curvada Halteres Peg Supinada https://youtu.be/g0VduhIsJIE
Remada Curvada Halteres Peg Neutra https://youtu.be/CyCkDYs49hM
Remada Máquina Peg Pronada https://youtu.be/_g6GeyWVivI
Leandro Twin
CREF: 128544-G/SP
WhatsApp: (11) 94442-1988
www.leandrotwin.com.br
Remada Máquina Peg Supinada https://youtu.be/1CG-dreRL6Q
Remada Máquina Peg Neutra https://youtu.be/C0-C0X7G8eQ
Remada Cross Peg Pronada https://youtu.be/IA0SRm2mY9M
Remada Cross Peg Supinada https://youtu.be/Q5Rl_fnOCBs
Remada Cross Peg Neutra https://youtu.be/wC1EsDy_esM
Remada Unilateral Peg Pronada https://youtu.be/VlCc-rDbwhA
Remada Unilateral Peg Supinada https://youtu.be/MAHNlcA4oXc
Remada Unilateral Peg Neutra https://youtu.be/C-tlPEhjwTk
Pull-Down Barra https://youtu.be/qw37xEEcoig
Pull-Down Cross Peg Pronada https://youtu.be/EG1ua8lDQJA
Pull-Down Cross Peg Supinada https://youtu.be/U80znmkD2z0
Pull-Down Cross Corda https://youtu.be/zdLHXB9Sn88
Deltóides
Exercício Execução em Vídeo
Elevação Lateral Halteres https://youtu.be/89K5H0Vvhnw
Elevação Lateral Sentado Halteres https://youtu.be/esWhjFJMNtU
Elevação Lateral Cross Posterior https://youtu.be/I-ywK8Q-9TM
Elevação Lateral Cross Anterior https://youtu.be/8KOat8ZsidI
Elevação Lateral Unilateral Banco Inclinado https://youtu.be/8s9JRhE95mU
Elevação Frontal Barra Peg Pronada https://youtu.be/jXUIrrvlR_0
Elevação Frontal Barra Peg Supinada https://youtu.be/Ea_8qpcysYI
Elevação Frontal Halteres Peg Pronada https://youtu.be/0K9NJHXYSm4
Elevação Frontal Halteres Peg Supinada https://youtu.be/DuUh84gcaso
Elevação Frontal Halteres Peg Neutra https://youtu.be/kQTNDsaEIKc
Elevação Frontal Cross Peg Pronada https://youtu.be/mOTjgenwgUc
Elevação Frontal Cross Peg Supinada https://youtu.be/lL8hIRuFcnU
Elevação Frontal Cross Corda https://youtu.be/xCQLo6LcudM
Elevação Frontal Anilha https://youtu.be/5bdlcZZvpzE
Elevação Frontal Cruzada https://youtu.be/btAEYSe5kp0
Crucifixo Inverso Halteres https://youtu.be/SLQZOByDo04
Crucifixo Inverso Cross https://youtu.be/gWa5abtK4G4
Desenvolvimento Halteres https://youtu.be/4pU-kV-OaVU
Desenvolvimento Anterior https://youtu.be/V_15VvJ3mr4
Desenvolvimento Posterior https://youtu.be/WIlm9oHEEq8
Desenvolvimento Militar https://youtu.be/urj7vgvfojk
Desenvolvimento Smith https://youtu.be/oi18jaIbFRM
Desenvolvimento Máquina https://youtu.be/oBF4YIwh_w8
Manguito Rotador Externo Barra https://youtu.be/QdUn8TBdjvU
Manguito Rotador Externo Halteres https://youtu.be/2ecstA3a5f4
Trapézio
Exercício Execução em Vídeo
Encolhimento Barra Anterior https://youtu.be/FutT8_yYJ58
Leandro Twin
CREF: 128544-G/SP
WhatsApp: (11) 94442-1988
www.leandrotwin.com.br
Encolhimento Barra Posterior https://youtu.be/Y4w7ZZW84eM
Encolhimento Halteres https://youtu.be/ZzJ3zelC0qI
Encolhimento Smith Anterior https://youtu.be/5DQl_71T8iI
Encolhimento Smith Posterior https://youtu.be/7Ui8zi1w5A4
Remada Alta Halteres https://youtu.be/hFMCum41W9c
Remada Alta Barra https://youtu.be/Z6jSLKXZ0Ag
Remada Alta Cross https://youtu.be/dHjEyNaCmn0
Remada Alta Smith https://youtu.be/lD_zvmzP1K0
Tríceps
Exercício Execução em Vídeo
Paralelas https://youtu.be/8ZhWzT-V54Q
Mergulho https://youtu.be/jAkRzFnEvSo
Supino Fechado https://youtu.be/qJGw6CnVh2Q
Rosca Testa Barra Peg Pronada https://youtu.be/orMEOzQjiAs
Rosca Testa Barra Peg Supinada https://youtu.be/D_wnqWbIrYs
Rosca Testa Halteres Peg Supinada https://youtu.be/OS8sz24YV1g
Rosca Testa Halteres Peg Neutra https://youtu.be/KzKdkwIjZg8
Rosca Testa Halteres Peg Pronada https://youtu.be/esAavWMIRZ8
Tríceps Pulley Corda https://youtu.be/_KrR8248eLo
Tríceps Pulley Peg Pronada https://youtu.be/QDt8P44ORa4
Tríceps Pulley Peg Supinada https://youtu.be/2W09NaNpiOA
Tríceps Pulley Unilateral Peg Pronada https://youtu.be/TmO_85EK09I
Tríceps Pulley Unilateral Peg Supinada https://youtu.be/iO5EOd9Xe4c
Rosca Francesa Anilha https://youtu.be/D2oQJTz-RCA
Rosca Francesa Barra Peg Pronada https://youtu.be/fcIzvqXOJzs
Rosca Francesa Barra Peg Supinada https://youtu.be/xnP-A7ig8No
Rosca Francesa Halteres Peg Neutra https://youtu.be/aI8x4pHiByU
Rosca Francesa Halteres Peg Supinada https://youtu.be/KoLqZRyZuuU
Rosca Francesa Halteres Peg Pronada https://youtu.be/DCbDClEDQvQ
Rosca Francesa Cross Corda https://youtu.be/QhJ67UyNdsc
Tríceps Coice Bilateral Halteres https://youtu.be/lbYQgZvJApA
Tríceps Coice Unilateral Halteres https://youtu.be/I4hzS9nYlgs
Tríceps Coice Unilateral Cross https://youtu.be/MGlqvfSCWLQ
Flexão De Braço Fechada https://youtu.be/9qT4QxmIuuU
Bíceps
Exercício Execução em Vídeo
Rosca Direta Barra Reta ou Barra W https://youtu.be/po8ibB0yY0Q
Rosca Direta Halteres https://youtu.be/ilyxkSNoyL8
Rosca Direta Cross https://youtu.be/_t2nQjiyboo
Rosca Martelo Barra H https://youtu.be/4YbWsz77mfc
Rosca Martelo Halteres https://youtu.be/KnymofpyiIQ
Leandro Twin
CREF: 128544-G/SP
WhatsApp: (11) 94442-1988
www.leandrotwin.com.br
Rosca Martelo Corda Cross https://youtu.be/TXYeSl2QT50
Rosca Alternada Halteres https://youtu.be/v15BcmivG8g
Rosca Alternada Cross-Over https://youtu.be/LiiNiYF4lPY
Rosca Scott Halteres https://youtu.be/WbHASg1d29w
Rosca Scott Barra ou Barra W https://youtu.be/wQRRqKu9g7U
Rosca Scott Máquina https://youtu.be/3GfAZv126D0
Rosca Concentrada https://youtu.be/Cryg5VkGQBw
Rosca Concentrada Martelo https://youtu.be/ysjKbVT6-FQ
Antebraço
Exercício Execução em Vídeo
Flexão de Punho Barra Sentado https://youtu.be/pfNPsnjVWb4
Flexão de Punho Barra Em Pé https://youtu.be/PF1w-a7yQus
Extensão de Punho Barra Sentado https://youtu.be/gHY5opbOhNE
Extensão de Punho Barra Em Pé https://youtu.be/guTTkQcy8jU
Extensão de Punho Cross https://youtu.be/SYHfATlt7LI
Flexão de Punho Cross https://youtu.be/4_Zf2r-2rAo
Rotacional de Punho https://youtu.be/MZ8y2hqjHxQ
Rosca Inversa Barra https://youtu.be/G1L3eV-a7gg
Rosca Inversa Cross https://youtu.be/0587NfWzEec
Rosca Inversa Alternada https://youtu.be/k86sqzLgiwY
Coxas
Exercício Execução em Vídeo
Agachamento Livre https://youtu.be/4TG8JdU6NPU
Agachamento Livre Frontal https://youtu.be/fJtI1_eUb2g
Agachamento Hack https://youtu.be/QZglgfUQZdk
Agachamento Smith https://youtu.be/4vA727LveHQ
Agachamento Smith Frontal https://youtu.be/_lPh4iHfvXA
Agachamento Halteres https://youtu.be/CROT8O8X_u0
Agachamento Adutores https://youtu.be/T64bNYs5-gI
Passada Barra https://youtu.be/q8oWAsKvdT0
Passada Halteres https://youtu.be/PCSEZejLkjk
Afundos Barra https://youtu.be/YoQL-sR3kFo
Afundos Halteres https://youtu.be/vj7uUw_5HYY
Afundos Smith https://youtu.be/0YjOOxFc7fY
Cadeira Extensora https://youtu.be/1f1DjMr68hY
Mesa Flexora https://youtu.be/OMKhQ2O11fc
Cadeira Flexora https://youtu.be/n8j1X_xByD4
Flexor Vertical https://youtu.be/HGoN-nfJFGE
Leg Press https://youtu.be/kyESFAj3W0E
Leg Press Adutores https://youtu.be/1kjxuWNPBUc
Stiff Barra https://youtu.be/Xgql23RkpBk
Stiff Halteres https://youtu.be/mNsSgOKopbE
Stiff Smith https://youtu.be/QDLNogcXvHU
Leandro Twin
CREF: 128544-G/SP
WhatsApp: (11) 94442-1988
www.leandrotwin.com.br
Agachamento Bulgaro Halteres https://youtu.be/WyMsCylTcKM
Agachamento Bulgaro Barra https://youtu.be/wENBoTTRDa8
Cadeira Adutora https://youtu.be/UB5qna8tQkw
Glúteos
Exercício Execução em Vídeo
4 Apoios Joelho Estendido https://youtu.be/C1LK-ca840k
4 Apoios Joelho Flexionado https://youtu.be/3H_WSx0dK-I
Glúteos Graviton https://youtu.be/F2yGtpW4J4s
Glúteos Máquina https://youtu.be/A68gT5W_J50
Glúteos Smith https://youtu.be/PMbVxKqNM7I
Glúteos Cross https://youtu.be/vgjt9LUm6Jg
Elevação Pélvica Barra https://youtu.be/jqgDVIv581k
Elevação Pélvica Halter https://youtu.be/XNbfCoWFcFs
Elevação Pélvica Anilha https://youtu.be/0lPFQdMtNBU
Elevação Pélvica Smith https://youtu.be/0I3xQYtPCGQ
Cadeira Abdutora https://youtu.be/yVZ0Vs7j6EM
Panturrilhas
Exercício Execução em Vídeo
Gêmeos Em Pé Máquina https://youtu.be/hlQbAQB61_Y
Gêmeos Em Pé Hack https://youtu.be/GAn7R1U3EDw
Gêmeos Em Pé Smith https://youtu.be/ER72bXEam4c
Gêmeos Em Pé Livre https://youtu.be/VMa37XJdejk
Gêmeos Sentado Máquina https://youtu.be/gBIxBWBorB8
Gêmeos Sentado Smith https://youtu.be/iK6cVWR3-jI
Gêmeos Sentado Livre https://youtu.be/CiFlAqIx-lY
Gêmeos Leg Press https://youtu.be/omdVB4rQnoQ
Abdômen \ Core \ Lombar
Caso eu não tenha especificado, você pode escolher qualquer um dos vídeos!
Exercício Execução em Vídeo
Supra https://youtu.be/N5SL7rhM07c
Infra https://youtu.be/8slFJ9J31lM
Oblíquos https://youtu.be/k9rfQiXoM1w
Prancha https://youtu.be/TxadpmTHK08
Extensão Lombar https://youtu.be/Jto980puQ3c`

function removeNoYouTubeLines (line) {
  return line.includes('youtu.be')
}

function transformKeyValue (acc, item) {
  const [key, value] = item.split(/\shttps:\/\//)

  return {
    ...acc,
    [key]: `https://${value}`
  }
}

const videos = pdf
  .replace(/\\/g, '/')
  .split('\n')
  .filter(removeNoYouTubeLines)
  .reduce(transformKeyValue, {})

writeFileSync('./videos-extracted.json', JSON.stringify(videos, null, 2))

console.log(videos)
