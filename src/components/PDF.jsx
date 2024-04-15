import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import nextLogo from "../nextjslogo.png";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    padding: 30
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold"
  },
  section: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    padding: 10,
    
  },
  paragraph: {
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 1.5,
    margin: 10
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey"
  }
});

function PDF() {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Hello world</Text>
        <View style={styles.section}>
          <Image src={nextLogo} />
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, dolor
            ad excepturi cum hic laboriosam beatae veniam, aut nam facere quas
            error neque natus minus atque modi quam consectetur exercitationem
            consequatur. Libero accusamus minima harum deserunt laudantium nobis
            quaerat dolor provident delectus fugit maxime saepe non beatae
            possimus soluta aut eos voluptate autem iste, id voluptates quisquam
            molestias reprehenderit voluptatem! Culpa fugiat non natus in
            repellat eos, ab, quasi et soluta iure possimus unde! Similique
            possimus nisi harum ducimus. Id quisquam nihil eveniet sit odit
            nulla eum, amet vel, sint at, quas non quod. Sunt ratione voluptates
            voluptas accusantium. Totam?
          </Text>
        </View>
        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum exercitationem ratione beatae! Natus voluptatem, nesciunt officiis iure cum praesentium dolores voluptate nihil possimus architecto modi reiciendis accusantium optio molestias blanditiis consequuntur sequi voluptas ipsum illo a, necessitatibus quos. Voluptates cum earum possimus corporis incidunt ducimus quis voluptatibus id delectus laboriosam, reprehenderit, ab in voluptate labore, quidem soluta ipsa exercitationem tempora rem quos deleniti. Esse quia ipsam autem animi doloremque qui quam tempore provident expedita delectus similique odit blanditiis corrupti ullam, maiores omnis possimus rerum, maxime quis tempora ea reprehenderit aut officiis. Reiciendis id consequuntur laboriosam impedit tempore itaque quibusdam laudantium?</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, labore rem, maiores aut similique deleniti aspernatur in quo amet id veniam nostrum quidem debitis, error illum minus harum numquam placeat odio dicta consequatur. Officiis numquam nihil explicabo iure possimus repellat maxime, eos neque eligendi rem quae voluptas corrupti, dolorem, ducimus provident. Cupiditate assumenda distinctio labore dolorem. Labore enim nisi excepturi inventore officia quaerat magni cupiditate, fugiat facilis consequatur veniam, molestiae a corrupti eos, odio quisquam sed. Praesentium perferendis, odit deserunt vel temporibus est impedit laboriosam dolorum, laborum sequi aliquam illo culpa obcaecati vero? Consectetur omnis voluptates minus sit aperiam cum veritatis at culpa eligendi expedita facilis fugiat excepturi labore ad, magnam, laboriosam numquam ex quis magni! Dicta odit expedita quibusdam corporis ipsum repellat temporibus. Laudantium inventore doloribus enim non omnis explicabo, accusantium et qui minus repudiandae illo ut sequi reiciendis magnam distinctio sed, repellendus maiores iusto molestiae, labore at aspernatur. Quos molestias expedita vitae quo, nesciunt non dolorum totam vero rerum. Iusto, neque? Deserunt adipisci, ex iste modi veritatis, incidunt labore consequuntur quam beatae et vitae voluptates. Minima eveniet ipsa quas numquam quod ipsum! Explicabo aperiam quisquam dolorem quasi veniam sunt hic nulla ea, accusamus sequi praesentium tenetur error commodi.
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, labore rem, maiores aut similique deleniti aspernatur in quo amet id veniam nostrum quidem debitis, error illum minus harum numquam placeat odio dicta consequatur. Officiis numquam nihil explicabo iure possimus repellat maxime, eos neque eligendi rem quae voluptas corrupti, dolorem, ducimus provident. Cupiditate assumenda distinctio labore dolorem. Labore enim nisi excepturi inventore officia quaerat magni cupiditate, fugiat facilis consequatur veniam, molestiae a corrupti eos, odio quisquam sed. Praesentium perferendis, odit deserunt vel temporibus est impedit laboriosam dolorum, laborum sequi aliquam illo culpa obcaecati vero? Consectetur omnis voluptates minus sit aperiam cum veritatis at culpa eligendi expedita facilis fugiat excepturi labore ad, magnam, laboriosam numquam ex quis magni! Dicta odit expedita quibusdam corporis ipsum repellat temporibus. Laudantium inventore doloribus enim non omnis explicabo, accusantium et qui minus repudiandae illo ut sequi reiciendis magnam distinctio sed, repellendus maiores iusto molestiae, labore at aspernatur. Quos molestias expedita vitae quo, nesciunt non dolorum totam vero rerum. Iusto, neque? Deserunt adipisci, ex iste modi veritatis, incidunt labore consequuntur quam beatae et vitae voluptates. Minima eveniet ipsa quas numquam quod ipsum! Explicabo aperiam quisquam dolorem quasi veniam sunt hic nulla ea, accusamus sequi praesentium tenetur error commodi.
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, labore rem, maiores aut similique deleniti aspernatur in quo amet id veniam nostrum quidem debitis, error illum minus harum numquam placeat odio dicta consequatur. Officiis numquam nihil explicabo iure possimus repellat maxime, eos neque eligendi rem quae voluptas corrupti, dolorem, ducimus provident. Cupiditate assumenda distinctio labore dolorem. Labore enim nisi excepturi inventore officia quaerat magni cupiditate, fugiat facilis consequatur veniam, molestiae a corrupti eos, odio quisquam sed. Praesentium perferendis, odit deserunt vel temporibus est impedit laboriosam dolorum, laborum sequi aliquam illo culpa obcaecati vero? Consectetur omnis voluptates minus sit aperiam cum veritatis at culpa eligendi expedita facilis fugiat excepturi labore ad, magnam, laboriosam numquam ex quis magni! Dicta odit expedita quibusdam corporis ipsum repellat temporibus. Laudantium inventore doloribus enim non omnis explicabo, accusantium et qui minus repudiandae illo ut sequi reiciendis magnam distinctio sed, repellendus maiores iusto molestiae, labore at aspernatur. Quos molestias expedita vitae quo, nesciunt non dolorum totam vero rerum. Iusto, neque? Deserunt adipisci, ex iste modi veritatis, incidunt labore consequuntur quam beatae et vitae voluptates. Minima eveniet ipsa quas numquam quod ipsum! Explicabo aperiam quisquam dolorem quasi veniam sunt hic nulla ea, accusamus sequi praesentium tenetur error commodi.
        </Text>
        <View style={styles.pageNumber}>
          <Text render={({pageNumber, totalPages}) => `${pageNumber}/${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
