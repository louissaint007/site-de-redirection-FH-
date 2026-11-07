# Futur Haïti — ressources IA

Page mobile-first de ressources gratuites, de communauté WhatsApp et de présentation de la formation AI Academy.

## Ajouter un guide PDF

1. Place le fichier PDF dans `assets/pdfs/`.
2. Place sa couverture (JPG, PNG ou WebP) dans `assets/covers/`.
3. Ajoute une entrée dans `documents.json` :

```json
[
  {
    "title": "Titre du guide",
    "description": "Ce que le lecteur trouvera dans le document.",
    "category": "Guide IA",
    "cover": "assets/covers/mon-guide.jpg",
    "pdf": "assets/pdfs/mon-guide.pdf"
  }
]
```

4. Envoie les changements sur la branche `main`. GitHub Pages republiera le site.

Les liens de téléchargement sont affichés après que le visiteur a rejoint WhatsApp et confirmé son accès. Cette confirmation fonctionne sur la base de la confiance : un site statique ne peut pas vérifier automatiquement l’adhésion à une chaîne WhatsApp. Les visiteurs peuvent accéder à la formation séparément, en option.
