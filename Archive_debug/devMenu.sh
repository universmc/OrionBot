#!/bin/bash

# Affichage de l'heure et du mode de développement
echo "💻 $(date "+%H:%M:%S") /dev mode"

# Fonction pour afficher le titre
titre() {  
    echo "🌌 OrionBot - Constellation Explorer 🌌"; 
    echo "         ╔═══════════════════════════════════════════════════════════╗";
    echo "         ║                                                            ║";
    echo "         ║   _   _ _ __ (_)_   _____ _ __ ___       _ __ ___   ___    ║";
    echo "         ║  | | | | '_ \| \ \ / / _ \ '__/ __|_____| '_ ' _' \| __|   ║";
    echo "         ║  | |_| | | | | |\ V /  __/ |  \__ \_____| | | | | | (__    ║";
    echo "         ║   \__,_|_| |_|_| \_/ \___|_|  |___/     |_| |_| |_|\___|   ║";
    echo "         ║                                                            ║";
    echo "         ╚═══════════════════════════════════════════════════════════╝";
    echo ""; 
}

# Fonction pour afficher le menuxz
menu() {
    echo "🌠 Explorez les mystères des constellations 🌠 "
    echo ""
    echo "   ╔═══════════════════════════════ OrionBot Constellations ════════════════════════════════╗";
    echo "   ║                                                                                        ║";
    echo "   ║         1. Aries                  2. Taurus                 3. Gemini                  ║";
    echo "   ║         4. Cancer                 5. Leo                    6. Virgo                   ║";
    echo "   ║         7. Libra                  8. Scorpio                9. Sagittarius             ║";
    echo "   ║         10. Capricorn             11. Aquarius              12. Pisces                 ║";
    echo "   ║                                                                                        ║";
    echo "   ╚════════════════════════════════════════════════════════════════════════════════════════╝";
    echo ""
    
    read -p "Choisissez une constellation (1-12) ou 'q' pour quitter : " commande

    case $commande in
        1)
            make generate_aries
            ;;
        2)
            make generate_taurus
            ;;
        3)
            make generate_gemini
            ;;
        4)
            make generate_cancer
            ;;
        5)
            make generate_leo
            ;;
        6)
            make generate_virgo
            ;;
        7)
            make generate_libra
            ;;
        8)
            make generate_scorpio
            ;;
        9)
            make generate_sagittarius
            ;;
        10)
            make generate_capricorn
            ;;
        11)
            make generate_aquarius
            ;;
        12)
            make generate_pisces
            ;;
        q)
            echo "✨ Session terminée ✨"
            exit 0
            ;;
        *)
            echo "Entrée invalide, veuillez réessayer."
            menu
            ;;
    esac
}

# Appel des fonctions
titre
menu
