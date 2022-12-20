export const profilerCallback = (id: string, phase: string, actualDuration: number, startTime: number, 
    baseDuration: number, commitTime: number, interactions: any) => {
    console.log(
      "id " + id + 
      " startTime " + startTime + 
      " actualDuration " + actualDuration + 
      " baseDuration " + baseDuration + 
      " commitTime " + commitTime + 
      " phase " + phase + 
      " interactions " + interactions
    );
  }