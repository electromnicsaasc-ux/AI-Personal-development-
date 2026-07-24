export function generateSmartMentorResponse(query: string, userContext?: any): string {
  const q = (query || '').toLowerCase().trim();
  const archetype = userContext?.report?.archetype || 'Goal Getter';

  if (q.includes('exam') || q.includes('test') || q.includes('paper') || q.includes('grade') || q.includes('score') || q.includes('marks')) {
    return `Exams can feel intense, but test anxiety is simply your brain getting ready to perform! Here is your 3-step action plan for exam success:

1. **4-7-8 Calming Breath**: Before opening the paper, inhale for 4s, hold for 7s, exhale for 8s. This immediately lowers your heart rate and clears mental fog.
2. **First-Pass Strategy**: Answer all easy questions first. This builds early momentum, boosts confidence, and locks in quick marks.
3. **Active Recall**: Test yourself with flashcards or teach concepts to an imaginary friend instead of passively reading textbook pages.

You have put in the effort, and your mind is capable of incredible focus. Take a deep breath and trust your preparation!`;
  }

  if (q.includes('focus') || q.includes('study') || q.includes('concentrate') || q.includes('distract') || q.includes('procrastinat') || q.includes('phone') || q.includes('attention')) {
    return `Loss of focus happens to every ambitious student! The secret isn't forcing willpower—it's designing your environment. Here is how to regain 100% focus today:

1. **The 2-Minute Friction Rule**: Tell yourself you only have to study for 2 minutes. Starting is 90% of the friction! Once momentum builds, you'll naturally keep going.
2. **Phone Out of Sight**: Place your phone in another room or inside a bag. Out of sight means out of mind.
3. **25-Minute Pomodoro Sprints**: Work for 25 focused minutes with zero notifications, followed by a strict 5-minute movement break.

Consistency always beats intensity. Start your first 2 Minute study sprint right now!`;
  }

  if (q.includes('nervous') || q.includes('fear') || q.includes('scared') || q.includes('confidence') || q.includes('speak') || q.includes('public') || q.includes('stage') || q.includes('shy') || q.includes('anxious')) {
    return `Nervousness is NOT a sign of weakness—it's proof that you care about doing well! Here is how to channel that energy into magnetic confidence:

1. **Mirror Practice**: Stand tall, look yourself in the eyes, and speak your opening sentence out loud 3 times.
2. **2-Minute Power Pose**: Stand with feet shoulder-width apart and hands on hips. Research shows this lowers cortisol and boosts confidence hormones.
3. **Shift Focus to Value**: Instead of worrying "What will they think of me?", ask "How can I share helpful value with them?"

Your unique voice deserves to be heard. Step up, smile, and own your moment!`;
  }

  if (q.includes('career') || q.includes('future') || q.includes('job') || q.includes('path') || q.includes('profession') || q.includes('college') || q.includes('field') || q.includes('major') || q.includes('work')) {
    return `Planning your career path as a ${archetype} is an exciting journey! Finding the right field comes down to aligning your natural strengths with real-world impact:

1. **Explore the Intersection**: Look for careers where your natural curiosities overlap with problems you enjoy solving.
2. **Informational Chats**: Reach out to 2 seniors or professionals on LinkedIn for a quick 10-minute chat about their daily work.
3. **Build Hands-On Projects**: Create small portfolio projects (coding scripts, design concepts, articles, or research summaries) to test your genuine interest.

Check out the "Career Suggestions" tab in PersonaAI for detailed paths mapped directly to your archetype!`;
  }

  if (q.includes('fail') || q.includes('mistake') || q.includes('sad') || q.includes('give up') || q.includes('upset') || q.includes('disappoint') || q.includes('hard') || q.includes('depressed') || q.includes('cry')) {
    return `I hear you, and I want you to know that failure is never the opposite of success—it is an essential part of success! Every leader and innovator has faced setbacks:

1. **Separate Failure from Your Identity**: You experienced a temporary setback; you are NOT a failure. You are a resilient learner in progress.
2. **Extract 1 Key Lesson**: Ask yourself: "What is 1 valuable insight this experience gave me for next time?"
3. **Take 1 Micro-Action**: Do one small positive thing right now—organize your desk, drink a glass of water, or take a 5-minute walk.

Be kind to yourself. You are far stronger than you realize, and tomorrow brings a brand new opportunity!`;
  }

  if (q.includes('lead') || q.includes('team') || q.includes('friend') || q.includes('relationship') || q.includes('communicate') || q.includes('people') || q.includes('talk') || q.includes('group')) {
    return `Great communication and leadership are superpowers that will elevate every area of your life! Here are 3 habits to practice:

1. **Active Listening**: Listen to understand, not just to reply. Ask follow-up questions like "What made you feel that way?"
2. **Lead by Example**: True leaders serve their team, stay calm under pressure, and encourage others.
3. **Express Gratitude**: Acknowledge others' contributions genuinely. People love working with supportive, positive individuals.

Keep honing your emotional intelligence—it is the #1 predictor of long-term success and lasting friendships!`;
  }

  if (q.includes('motivation') || q.includes('habit') || q.includes('discipline') || q.includes('time') || q.includes('routine') || q.includes('schedule') || q.includes('daily') || q.includes('plan')) {
    return `Motivation gets you started, but discipline keeps you growing! Here is how to master your daily routine:

1. **Habit Stacking**: Attach new good habits to existing daily routines (e.g., "Right after morning tea, I will review my top 3 goals").
2. **Protect Your Morning**: Spend the first 30 minutes of your day without checking social media or notifications.
3. **Keep Your Streak**: Use the PersonaAI progress tracker to keep your daily learning streak alive!

Small daily improvements, compounded over time, yield massive success. What is your #1 priority for today?`;
  }

  // General fallback tailored to the question snippet
  const topicSnippet = query.length > 3 ? `"${query.slice(0, 35)}${query.length > 35 ? '...' : ''}"` : "your goal";
  return `That is a really thoughtful question regarding ${topicSnippet}! Here is Mentor Alex's coaching advice for you:

1. **Clarify Your Primary Goal**: Write down on paper what an ideal outcome looks like for you.
2. **Break It into 10-Minute Tasks**: Big goals feel overwhelming until you break them down into small bite-sized action steps.
3. **Focus on Controllables**: Direct 100% of your energy toward your preparation, attitude, and effort today.

You have incredible potential inside you. What is one micro-step you can take in the next 10 minutes?`;
}
