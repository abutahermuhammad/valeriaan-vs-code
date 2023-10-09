import * as vscode from 'vscode';

class CodingActivityTracker {
    private activeFile: string | undefined;
    private startTime: number | undefined;

    startTracking(fileUri: vscode.Uri) {
        this.activeFile = fileUri.toString();
        this.startTime = Date.now();
    }

    stopTracking() {
        if (this.activeFile && this.startTime) {
            const endTime = Date.now();
            const elapsedTimeInSeconds = (endTime - this.startTime) / 1000;

            // Store the coding activity data (e.g., in-memory or in a file)
            // You can also send this data to a remote server if needed.

            // Reset the tracker
            this.activeFile = undefined;
            this.startTime = undefined;
        }
    }
}
