export default function Features() {
    return (
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Key Features of GIT Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Collaboration</h3>
              <p>GIT enables efficient team collaboration, allowing multiple people to work on the same project seamlessly.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Version Control</h3>
              <p>Keep track of every change in your project and easily roll back to previous versions when necessary.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">    
              <h3 className="text-2xl font-bold mb-2">Branching</h3>
              <p>Develop new features in isolated branches without affecting the main codebase.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  