# Phylogenetics lessons

Each phylogenetics lesson now lives in its own file.

- `Lesson01.jsx` → Course introduction & setup
- `Lesson02.jsx` → Tree thinking

To edit a lesson, modify only its file. Shared navigation, completion state,
and class-material links are passed from `App.jsx` through the `shared` prop.

Workflow:

```bash
npm run dev
npm run build
```
