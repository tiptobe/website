import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const PrivacyPage = () => {
  return (
    <main style={pageStyles}>
      <title>TipToBe - Privacy policy</title>
      <h1 style={headingStyles}>TipToBe - Privacy Policy</h1>
      <p style={paragraphStyles}>
        Ultimo aggiornamento: 27/10/2023
        <br />
        Benvenuti su TipToBe! Ci teniamo alla vostra privacy, e desideriamo informarvi su come raccogliamo, utilizziamo e proteggiamo le vostre informazioni personali. Leggete attentamente questa privacy policy per comprendere coime trattiamo i vostri dati.
        <br />
        1. Informazioni raccolte
        <br />
        Informazioni personali: raccogliamo le seguenti informazioni personali quanod utilizzate l'app TipToBe:
        <ul>
            <li>Nome</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono</li>
            <li>Altre informazioni fornite volontariamente dagli utenti</li>
        </ul>
        <br />
        Informazioni non personali: raccogliamo informazioni non personali legate a:
        <ul>
            <li>
                Dati di utilizzo, tra cui informazioni sulle pagine visitate ed azioni compiute nell'app.
            </li>
            <li>
                Dati del dispositivo, tra cui modello, sistema operativo ed identificativi univoci.
            </li>
        </ul>
        <br />
        2. Scopo della raccolta dei dati
        <br />
        Raccogliamo le informazioni personali e non personali sopra indicate per i seguenti scopi:
        <ul>
            <li>
                Fornire e migliorare i servizi: utilizziamo i dati per fornire i servizi dell'app TipToBe e per migliorarli continuamente.
            </li>
            <li>
                Comunicazioni: potremmo utilizzare i dati per inviare notifiche e comunicazioni relative all'app TipToBe.
            </li>
            <li>
                Supporto clienti: utilizziamo le informazioni per rispondere alle richieste degli utenti e fornire assistenza.
            </li>
        </ul>
        <br />
        3. Condivisione delle informazioni
        <br />
        Non condividiamo le informazioni personali degli utenti con terze parti, tranne che nei seguenti casi:
        <ul>
            <li>
                Fornitori di serivzi: possiamo condividere informazioni con terze parti che forniscono servizi a TipToBe, ma solo per scopi correlati all'erogazione dei servizi.
            </li>
            <li>
                Obblighi legali: condivideremo le informazioni se richiesto da leggi, regolamenti o richieste governative valide.
            </li>
        </ul>
        <br />
        4. Protezione delle informazioni
        <br />
        Ci impegnamo a proteggere le informazioni degli utenti e adottiamo misure di sicurezza adeguate per prevenire l'accesso non autorizzato, la divulgazione o l'alterazione.
        <br />
        5. Modifiche a questa privacy policy
        <br />
        Ci riserviamo il diritto di apportare modifiche a questa privacy policy. Le modifiche saranno comunicate agli utenti attraverso email e notifica, e saranno effettive dalla data dell'ultimo aggiornamento indicata in cima a questa pagina.
        <br />
        6. Contatti
        <br />
        Se avete domande o preoccupazioni relative a questa privacy policy, potete contattarci all'indirizzo email administration@tiptobe.com.
        <br />
        Grazie per aver scelto TipToBe. La vostra privacy è improtante per noi, e faremo del nostro meglio per proteggere le vostre informazioni personali.
      </p>
    </main>
  )
}

export default PrivacyPage
