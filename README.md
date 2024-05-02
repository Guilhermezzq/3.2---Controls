# ScrollControls 
This project demonstrates the use of ScrollControls along with React Three Fiber (R3F) and Drei to create an interactive scrolling experience in a 3D environment. Let's explore the main properties and functionalities implemented:

# Key Features:
Importing 3D Model and Adding Lights:
The 3D model is imported using the useGLTF function from Three.js.

Two lights are added to the scene: an ambient light and a directional light.

# Configuring ScrollControls:

We use the ScrollControls component to control the scroll behavior on the page.

# Key properties include:

pages: Defines the number of sections we can scroll through.

damping: Controls the smoothness of the scrolling.

infinite: Enables infinite scrolling.

Adding Content:

Content is added within Scroll components.

We use the primitive primitive to render the imported 3D model.

HTML is added within a second Scroll component to create floating text in the scene.

# Image Manipulation:

Images are manipulated using the Image component and the useScroll function.

The zoom property is dynamically adjusted based on the scroll position.

Grayscale is applied to some images for visual effects.

# Additional Description:

The code uses React hooks such as useRef and useEffect to interact with scene elements and dynamically update content based on scrolling.

Intensive use of references (ref) is made to efficiently manipulate scene elements.

Smooth scrolling functionality and element transitions create an immersive experience for the user.

Images are carefully positioned and scaled to create visually interesting and aesthetically pleasing compositions.

This project is an excellent demonstration of how ScrollControls can be integrated with libraries like React Three Fiber and Drei to create interactive and engaging 3D experiences. Try it out yourself and let your creativity flow
