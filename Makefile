# Makefile per progetto JWT Decoder Italia

ROLLUP=node_modules/.bin/rollup
SERVE=node_modules/.bin/http-server

SRC_DIR=src
DIST_DIR=dist
PUBLIC_DIR=public
DOCS_DIR=docs
BUNDLE=$(DIST_DIR)/bundle.js

.PHONY: all build deploy clean serve

all: build deploy

build:
	@echo "▶ Compilazione con Rollup..."
	$(ROLLUP) -c

deploy:
	@echo "▶ Copia file in $(DOCS_DIR)/"
	mkdir -p $(DOCS_DIR)
	cp -r $(PUBLIC_DIR)/* $(DOCS_DIR)/
	cp $(BUNDLE) $(DOCS_DIR)/

clean:
	@echo "▶ Pulizia directory"
	rm -rf $(DIST_DIR) $(DOCS_DIR)

serve:
	@echo "▶ Avvio server locale su http://localhost:8080"
	$(SERVE) $(DOCS_DIR)
