import imageblog from "../images/bg-kitchen2.png";
export const blogPosts = [
  {
    id: 1,
    title: "Top 10 Nutrition Tips for Fitness Enthusiasts",
    excerpt:
      "Discover the best dietary strategies to support your fitness goals and improve overall health.",
    content: `
  # Top 10 Nutrition Tips for Fitness Enthusiasts
  
  Nutrition plays a crucial role in achieving your fitness goals. Here are the top 10 tips to fuel your body and optimize performance:
  
  1. **Prioritize Protein Intake**
     Protein is essential for muscle repair and growth. Aim for lean protein sources like chicken, fish, tofu, and legumes.
  
  2. **Stay Hydrated**
     Proper hydration is key to performance. Drink at least 8-10 glasses of water daily, more when exercising.
  
  3. **Balanced Macronutrients**
     Ensure a balance of proteins, carbohydrates, and healthy fats in your diet.
  
  4. **Timing Your Meals**
     Eat a balanced meal 2-3 hours before workout and a protein-rich snack within 30 minutes after exercise.
  
  5. **Complex Carbohydrates**
     Choose whole grains, vegetables, and fruits over processed carbs for sustained energy.
  
  ... (rest of the detailed content)
      `,
    author: "Sarah Johnson",
    date: "May 15, 2024",
    image: imageblog,
    link: "/blog/1-nutrition-tips",
    topics: ["nutrition", "fitness", "diet"],
  },
  {
    id: 2,
    title: "Effective Workout Routines for Beginners",
    excerpt:
      "Learn how to start your fitness journey with safe and effective exercise plans.",
    content: `
  # Effective Workout Routines for Beginners
  
  Starting a fitness journey can be intimidating, but with the right approach, you can build a solid foundation:
  
  1. **Start with Bodyweight Exercises**
     Master basic movements like squats, push-ups, and lunges before adding weights.
  
  2. **Create a Consistent Schedule**
     Aim for 3-4 workouts per week, allowing rest days for recovery.
  
  3. **Focus on Proper Form**
     Quality movements are more important than quantity or weight.
  
  ... (rest of the detailed content)
      `,
    author: "Mike Thompson",
    date: "April 22, 2024",
    image: imageblog,
    link: "/blog/2-beginner-workouts",
    topics: ["workout", "fitness", "beginners"],
  },
  {
    id: 3,
    title: "Mental Health and Physical Fitness Connection",
    excerpt:
      "Explore how regular exercise can improve your mental well-being and reduce stress.",
    content: `
  # Mental Health and Physical Fitness Connection
  
  Exercise is not just about physical health, but mental wellness too:
  
  1. **Stress Reduction**
     Physical activity releases endorphins, which naturally reduce stress and anxiety.
  
  2. **Improved Mood**
     Regular exercise can help combat depression and improve overall mood.
  
  3. **Increased Self-Confidence**
     Achieving fitness goals boosts self-esteem and personal empowerment.
  
  ... (rest of the detailed content)
      `,
    author: "Dr. Emily Roberts",
    date: "March 10, 2024",
    image: imageblog,
    link: "/blog/3-mental-health-fitness",
    topics: ["mental health", "wellness", "fitness"],
  },
  {
    id: 4,
    title: "Strength Training 101: Build Muscle and Boost Metabolism",
    excerpt:
      "Learn the fundamentals of strength training and how it can transform your body and health.",
    content: `
  # Strength Training 101
  
  Strength training is a powerful tool for fitness and overall health...
      `,
    author: "Jack Williams",
    date: "February 5, 2024",
    image: imageblog,
    link: "/blog/4-strength-training",
    topics: ["strength", "muscle", "training"],
  },
  {
    id: 5,
    title: "Yoga and Fitness: Flexibility Meets Strength",
    excerpt:
      "Discover how incorporating yoga can enhance your fitness routine and overall well-being.",
    content: `
  # Yoga and Fitness Integration
  
  Combining yoga with traditional fitness can provide comprehensive health benefits...
      `,
    author: "Lisa Chen",
    date: "January 15, 2024",
    image: imageblog,
    link: "/blog/5-yoga-fitness",
    topics: ["yoga", "flexibility", "wellness"],
  },
];

// Helper function to search blogs
export const searchBlogs = (query) => {
  if (!query) return blogPosts;

  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.topics.some((topic) => topic.toLowerCase().includes(lowercaseQuery))
  );
};

// Helper function to get blog by ID
export const getBlogById = (id) => {
  return blogPosts.find((post) => post.id === parseInt(id));
};
