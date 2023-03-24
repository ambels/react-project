import Parent from '../components/Parent';

export default function Home() {
  return (
    <section style={styles.container}>
      <Parent />
    </section>
  )
}

const styles = {
  container: {
    width: '80%',
    margin: 'auto',
    marginTop: '20px',
    backgroundColor: '#F5F5F5',
    padding: '20px 50px',
  }
}
