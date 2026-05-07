package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"time"
)

func main() {
	apiKey := os.Getenv("APINODE_API_KEY")
	if apiKey == "" {
		panic("APINODE_API_KEY is required")
	}

	baseURL := getenv("APINODE_BASE_URL", "https://apinode.pro")
	model := getenv("APINODE_MODEL", "gpt-5.5")

	payload, _ := json.Marshal(map[string]any{
		"model": model,
		"input": "Say hello from Go and API NODE.",
	})

	client := &http.Client{Timeout: 60 * time.Second}
	req, _ := http.NewRequest("POST", baseURL+"/responses", bytes.NewReader(payload))
	req.Header.Set("Authorization", "Bearer "+apiKey)
	req.Header.Set("Content-Type", "application/json")

	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	if resp.StatusCode >= 300 {
		panic(fmt.Sprintf("request failed: %s\n%s", resp.Status, body))
	}

	fmt.Println(string(body))
}

func getenv(name, fallback string) string {
	if value := os.Getenv(name); value != "" {
		return value
	}
	return fallback
}
