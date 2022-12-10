# Interview ChatGPT

Allow ChatGPT to "listen" and "tell" me what it thinks about a healthy home office.

### Workflow

![workflow](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuN8hoiyhISrBKT2rKt1AJCu6CQqKYa5KOcbAPZuNJ10X3vGkoIzAnPHN2Yv8JKtEq2t9ror9hIXHGZK8GnRJHf0u5WiLe3PYo3jd99Qu1uIWQ8U9KMwwKWXG0EJSOh33bL3CGPSa8VmKS0OWE38mJ700Ce5H1G00)

I created the diagram using [PlantUML](https://www.plantuml.com/). Below is the text from which the diagram was created.

```
@startuml
Frontend -> Backend : send audio
Backend -> Backend: store audio
Backend -> "Speech-to-text" : send audio
"Speech-to-text" -> Backend : send text
Backend -> Backend : store text
Backend -> ChatGPT : send text
ChatGPT -> Backend : send text
Backend -> Backend : store text
Backend -> "Text-to-speech" : send text
"Text-to-speech" -> Backend : send audio
Backend -> Backend : store audio
Backend -> Frontend : send audio
@enduml
```