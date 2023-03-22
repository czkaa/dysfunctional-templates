<template>
     <div class="w-10/12 sm:w-full p-4 bg-primary shadow-xs" :style="{maskImage: `url('/dysfunctional-templates/background.svg')`, maskSize: 'cover'}">
        
        <SnippetResizable class="w-9/12 hover:bg-primary transition-all duration-500 mx-auto">
            <BasicInput 
            :resize="true" 
            class="filter-outline-xs"
            classNames="w-full text-md text-secondary leading-1 outline-none bg-transparent bg-opacity-20 placeholder-secondary sm:filter-none"
            text="Das Web 2.0 wird durch immer einfacher werdende Mittel zur Erstellung von Websites ohne jegliche Programmierkenntnisse geprägt. In diesem Kurs untersuchen wir die Beziehung von Platzhaltertexten und tatsächlichen Inhalten, zwischen Konventionen, Generalisierbarkeit und Usuability. Wir besprechen verschiedene Standpunkte, besuchen existierende Websites und schauen uns Tools von KI-basierten Template-Baukästen bis hin zu einfachen Texteditoren an. In kleinen Code- und Gedankenexperimenten erstellen wir gemeinsam unsere eigene, antagonistische Version des funktionalen Templates: Das dysfunktionale Template kann auf Lesbarkeit mit Verwirrung antworten oder Hierarchien auf den Kopf stellen. Es kann langsam, ineffizient und dilettantisch sein. Es kann Entscheidungen in Frage stellen, anstatt sie abzunehmen.<br><br>Der Kurs beginnt mit einer grundlegenden Einführung in HTML und CSS. Es ist keine Programmiererfahrung erforderlich. Studierende ohne Programmiererfahrung sind insbesondere zur Teilnahme ermutigt und es wird verschiedene Einstiegspunkte für unterschiedliche Erfahrungsstufen geben."
            placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            />
        </SnippetResizable>

    </div>
</template>