SHELL := /bin/bash
# Messages d'initialisation
COMMANDE1_MSG="✨ Initialisation du serveur Telegram ✨"
COMMANDE2_MSG="✨ Connection Pi-Quantum ✨ "
COMMANDE3_MSG="✨ Brainstorming génération d'idées ✨"
COMMANDE9_MSG="✨ Mise à jour du répertoire sur GitHub✨"
COMMANDE10_MSG="✨ Exit session✨"

# Messages pour les constellations
ARIES_MSG="✨ Génération how_To pour la constellation Aries ✨"
TAURUS_MSG="✨ Génération du how_To pour la constellation Taurus ✨"
GEMINI_MSG="✨ Génération du how_To pour la constellation Gemini ✨"
CANCER_MSG="✨ Génération du how_To pour la constellation Cancer ✨"
LEO_MSG="✨ Génération de how_To pour la constellation Leo ✨"
VIRGO_MSG="✨ Génération de how_To pour la constellation Virgo ✨"
LIBRA_MSG="✨ Génération de how_To pour la constellation Libra ✨"
SCORPIO_MSG="✨ Génération de how_To pour la constellation Scorpio ✨"
SAGITTARIUS_MSG="✨ Génération de how_To pour la constellation Sagittarius ✨"
CAPRICORN_MSG="✨ Génération de how_To pour la constellation Capricorn ✨"
AQUARIUS_MSG="✨ Génération de how_To pour la constellation Aquarius ✨"
PISCES_MSG="✨ Génération de how_To pour la constellation Pisces ✨"

# Commandes de génération
generate_aries:
	@echo "${ARIES_MSG}"
	@node script.js Aries

generate_taurus:
	@echo "${TAURUS_MSG}"
	@node script.js Taurus

generate_gemini:
	@echo "${GEMINI_MSG}"
	@node script.js Gemini

generate_cancer:
	@echo "${CANCER_MSG}"
	@node script.js Cancer

generate_leo:
	@echo "${LEO_MSG}"
	@node script.js Leo

generate_virgo:
	@echo "${VIRGO_MSG}"
	@node script.js Virgo

generate_libra:
	@echo "${LIBRA_MSG}"
	@node script.js Libra

generate_scorpio:
	@echo "${SCORPIO_MSG}"
	@node script.js Scorpio

generate_sagittarius:
	@echo "${SAGITTARIUS_MSG}"
	@node script.js Sagittarius

generate_capricorn:
	@echo "${CAPRICORN_MSG}"
	@node script.js Capricorn

generate_aquarius:
	@echo "${AQUARIUS_MSG}"
	@node script.js Aquarius

generate_pisces:
	@echo "${PISCES_MSG}"
	@node script.js Pisces


exit_session:
	@echo "${COMMANDE10_MSG}"

menu :
	@echo "Welcom To cycliq Economical system."
	@echo""
	@echo"╔═════════════════════════════════════╗     ╔═════════════════════════════════════════════════════════════════════╗"
	@echo"╠═══════════ ✨ Pi Console ═══════════╣     ║  [💫] [💬] [📚] [🌌] [✨] [⚡️] [💰] [🌴] [📱] [📡]              [🛰]║"
	@echo"║                                     ║     ╠═════════════════════════════════════════════════════════════════════╣"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"╠═════════════════════════════════════╣     ╠═════════════════════════════════════════════════════════════════════╣"
	@echo"║(∏)                                  ║     ║[💻.📱]:/<                                                        /%>║"
	@echo"╚═════════════════════════════════════╝     ╚═════════════════════════════════════════════════════════════════════╝"	
	@echo""

MAGIC_TARGETS := codex build rep file script clean

all: $(MAGIC_TARGETS)

srv : run start

start:
	@npm start
run:
	@node ./srv/srv.js


update:
	@echo "✨ Mise en état du dossier sur github✨"
	@git add .
	@git commit -m "test"
	@git push
	@echo "✨ Mise à jour terminée✨"
S1:
	@echo "✨ Mrun session brainstorming ✨"
	@git add .
	@git commit -m "sesssion brainstorm"
	@git push
	@echo "✨ Mise à jour terminée✨"

.PHONY: sh commande1 commande2 commande3 commande4 commande5
