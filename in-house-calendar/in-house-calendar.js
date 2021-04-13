
/******************tip 1 ****************/
/*
But how did we know that these meetings overlap?

We could tell the meetings overlapped because the end time of the first one was after the start time of the second one! 
But our ideas of "first" and "second" are important here—this only works after we ensure that we treat the meeting that starts earlier as the "first" one.

How would we formalize this as an algorithm? Be sure to consider these edge cases:

The end time of the first meeting and the start time of the second meeting are equal. For example: [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]
The second meeting ends before the first meeting ends. For example: [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]

*/


//treat the meeting with earlier time as "first"
//if end time is >= start of 2nd meeting, merge into one
//result = start time is 1st meeting start
//end time is later of 1st & 2nds end time
// ELSE leave them seperate

//comparing all pairs take lots of time

// Solution
// first sort meetings by start time , so any meetings that needs to be merged
// are now next to each other


function mergeRanges(meetings){
    const meetingsCopy = JSON.parse(JSON.stringify(meetings))

    const sortedMeetings = meetingsCopy.sort((a,b) =>{
        return a.startTime - b.startTime
    })

    const mergedMettings = [sortedMeetings[0]]

    for (let i =1; i<sortedMeetings.length; i++){
        const currentMeeting = sortedMeetings[i]

        const lastMergedMeeting = mergedMettings[mergedMettings.length -1]

        if (currentMeeting.startTime <= lastMergedMeeting.endTime){
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime)
        } else {
            mergedMettings.push(currentMeeting)
        }
    }

    return mergedMettings
}