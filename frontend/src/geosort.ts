async function testConnection(): Promise<void> {
    const response = await fetch("/api/hello");
    const text = await response.text();

    document.getElementById("status")!.innerText = "Connection working: " + text;
}

testConnection();