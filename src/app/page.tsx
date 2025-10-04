import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FrontCard } from "@/components/frontCard";

export default function Home() {
  return (
    <div>
      <Header />
      <FrontCard />
      <div className={`flex bg-gold-100 text-gold-950 h-fit min-h-full`}>
        <div className={`my-10 mx-[12.5vw] text-xl space-y-6`}>
          <p>Philosophy invites us to pause and consider the deeper structures underlying our everyday experience. Whether we grapple with the nature of consciousness, the limits of knowledge, or the foundations of ethical action, the philosophical impulse remains the same: to seek clarity in a world that often resists it. At its best, philosophy doesnt merely offer answers—it reshapes the very questions we ask.</p>
          <p>Throughout history, thinkers from diverse cultures have contributed to a rich tapestry of ideas that continue to inspire debate and discovery. From the dialogues of Plato to the meditations of Confucius, from existential reflections to analytic rigor, philosophy spans traditions and transcends borders. These voices, while distinct, are united by a shared commitment to truth-seeking, critical inquiry, and the examined life.</p>
          <p>This site serves as a space to explore those ideas—old and new—that challenge, provoke, and illuminate. Whether youre a seasoned student of philosophy or simply curious about the big questions, we invite you to join the conversation. Here, reflection isnt a retreat from life; its a way of engaging more deeply with it.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
} 
