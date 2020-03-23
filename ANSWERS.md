- [ ] Why would you use class component over function components (removing hooks from the question)?
      At this time, it's only if you want to because React Hooks allows you to hook into life cycle methods that classes allow you to do.
- [ ] Name three lifecycle methods and their purposes.
      ComponentDidMount(), ComponentDidUpdate, ComponentDidUnmount()
      first: the stage when a component first mounts, allows you to call async requests to load data
      second: allows you to do something when component does update, or controls when component does update
      third: allows you to hook into the phase where you can do clean up operations such as clearing intervals or unsuscribe from listeners.
- [ ] What is the purpose of a custom hook?
      To not clutter up the functional component, to reuse logic
- [ ] Why is it important to test our apps?
      To ensure or get as close as possible our expected behavior out of components and or elements with user interactions.
