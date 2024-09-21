# Affichage de l'heure et du mode de développement
echo "💻$(date "+%H:%M:%S") /dev mode"

titre() {  
    echo "         ╔═══════════════════════════════════════════════════════════╗";
    echo "         ║               🌌 OrionBot - Constellation Explorer 🌌      ║";
    echo "         ║   _   _ _ __ (_)_   _____ _ __ ___       _ __ ___   ___    ║";
    echo "         ║  | | | | '_ \| \ \ / / _ \ '__/ __|_____| '_ ' _' \| __|  ║";
    echo "         ║  | |_| | | | | |\ V /  __/ |  \__ \_____| | | | | | (__   ║";
    echo "         ║   \__,_|_| |_|_| \_/ \___|_|  |___/     |_| |_| |_|\___|  ║";
    echo "         ║          🌠 Explorez les mystères des constellations 🌠    ║";
    echo "         ╚═══════════════════════════════════════════════════════════╝";
    echo ""; 
}

# Définition de la fonction 'menu' pour afficher le menu des constellations

menu() {
    echo ""
    echo "   ╔════════════════════════════════════╗    ╔════════════════════════════════════════════════════════════════════════════════════╗";
    echo "   ╠───────────{ ✨ BLOG ✨ }───────────╣    ║ [📗 📕 📒]╠┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈🔷 Blog des Developpeurs Blogx 🔷┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈[💫] ║";
    echo "   ║                      💠            ║    ╠                                                                                     ";
    echo "   ║             ╲┈┈┈┈╱                 ║    ║                                                                                    ║";      
    echo "   ║             ╱▔▔▔▔╲                 ║    ║                                                                                    ║";
    echo "   ║            ┃┈▇┈┈▇┈┃                ║    ║                                                                                    ║";
    echo "   ║          ╭╮┣━━━━━━┫╭╮              ║    ║                                                                                    ║";
    echo "   ║          ┃┃┃┈┈┈┈┈┈┃┃┃              ║    ║                                                                                    ║";
    echo "   ║          ╰╯┃┈┈┈┈┈┈┃╰╯              ║    ║                                                                                    ║";
    echo "   ║            ╰┓┏━━┓┏╯                ║    ║                                                                                    ║";
    echo "   ║             ╰╯  ╰╯                 ║    ║                                                                                    ║";
    echo "   ║    ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈     ║    ║                                                                                    ║";
    echo "   ║ [>]Blog                            ║    ║                                                                                    ║";
    echo "   ║                                    ║    ║                                                                                    ║";
    echo "   ║       1. Aries                     ║    ║                                                                                    ║";
    echo "   ║       2. Taurus                    ║    ║                                                                                    ║";
    echo "   ║       3. Gemini                    ║    ║                                                                                    ║";
    echo "   ║       4. Cancer                    ║    ║                                                                                    ║";
    echo "   ║       5. Leo                       ║    ║                                                                                    ║";
    echo "   ║       6. Virgo                     ║    ║                                                                                    ║";
    echo "   ║       7. Libra                     ║    ║                                                                                    ║";
    echo "   ║       8. Scorpio                   ║    ║                                                                                    ║";
    echo "   ║       9. Sagittarius               ║    ║                                                                                    ║";
    echo "   ║       10. Capricorn                ║    ║                                                                                    ║";
    echo "   ║       11. Aquarius                 ║    ║                                                                                    ║";
    echo "   ║       12. Pisces                   ║    ║                                                                                    ║";
    echo "   ║                                    ║    ║                                                                            [q] exit║";
    echo "   ╠════════════════════════════════════╣    ╠════════════════════════════════════════════════════════════════════════════════════╣";
    echo "   ║ [📱] [📷] [🎹] [🤖] [🗂️] [📊] [💰]  ║    ║[🌴.📡]:<                                                                       [🛰] ║";
    echo "   ╚════════════════════════════════════╝    ╚════════════════════════════════════════════════════════════════════════════════════╝"; 
    echo ""
        
    read -p "Choisissez une constellation (1-12) ou 'q' pour quitter : " commande

    case $commande in
        1) make generate_aries ;;
        2) make generate_taurus ;;
        3) make generate_gemini ;;
        4) make generate_cancer ;;
        5) make generate_leo ;;
        6) make generate_virgo ;;
        7) make generate_libra ;;
        8) make generate_scorpio ;;
        9) make generate_sagittarius ;;
        10) make generate_capricorn ;;
        11) make generate_aquarius ;;
        12) make generate_pisces ;;
        q) echo "✨ Fin de la session OrionBot ✨" ;;
        *) echo "Choix invalide !" && menu ;;
    esac
}

# Appel des fonctions
titre
menu
