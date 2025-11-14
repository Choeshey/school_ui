import withCurtainRaiser from '../utils/withCurtainRaiser';

const About = () => {
    return (
        <div className="container mx-auto py-20 px-4 h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center">Courses</h1>
            <p className="mt-8 text-lg text-center max-w-3xl mx-auto">
                Welcome to St John Secondary School. We are dedicated to providing the highest quality education and fostering a community of passionate learners. Our mission is to empower students with the knowledge, skills, and confidence to succeed in a rapidly changing world.
            </p>
        </div>
    );
};

// Wrap the About component with the HOC to give it the curtain raiser animation
export default withCurtainRaiser(About);
