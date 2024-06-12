#Helsingin yliopiston harjoitustehtävästä "lahjavero" 12.6.2024 koodattu. Menossa jatkojalostukseen->

#Verottajan mukaan lahja tarkoittaa sitä, että omaisuus siirtyy toiselle henkilölle ilman korvausta. Lahjasta pitää maksaa lahjaveroa, jos samalta lahjanantajalta saatujen lahjojen arvo on kolmen vuoden aikana 5 000 euroa tai enemmän.

#Kun lahja tulee lähimmiltä sukulaisilta, lahjaveron määrä määräytyy seuraavan taulukon mukaan:

#Lahja	                Vero alarajalla	            Veroprosentti ylimenevästä
#5 000 — 25 000	        100	                        8
#25 000 — 55 000	    1 700	                    10
#55 000 — 200 000	    4 700	                    12
#200 000 — 1 000 000	22 100	                    15
#1 000 000 —>	        142 100	                    17

lahjan_suuruus = int(input("Lahjan suuruus? "))

if lahjan_suuruus < 5000:
    print("Ei veroa")
else:
    if lahjan_suuruus <= 25000:
        vero = 100 + (lahjan_suuruus - 5000) * 0.08
    elif lahjan_suuruus <= 55000:
        vero = 1700 + (lahjan_suuruus - 25000) * 0.1
    elif lahjan_suuruus <= 200000:
        vero = 4700 + (lahjan_suuruus - 55000) * 0.12
    elif lahjan_suuruus <= 1000000:
        vero = 22100 + (lahjan_suuruus - 200000) * 0.15
    else:
        vero = 142100 + (lahjan_suuruus - 1000000) * 0.17

    print("Vero:", vero, "euroa")
