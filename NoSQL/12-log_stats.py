#!/usr/bin/env python3
"""12-log_stats.py"""
from pymongo import MongoClient


def log():
    """Connect to MongoDB"""
    client = MongoClient('mongodb://localhost:27017')
    db = client.logs
    collection = db.nginx
    total_logs = collection.count_documents({})

    print(f'{total_logs} logs')

    methods = [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ]
    print('Methods:')
    for method in methods:
        method_count = collection.count_documents({'method': method})
        print(f'\tmethod {method}: {method_count}')

    status_check = collection.count_documents({
        'method': "GET",
        'path': "/status"
        })
    print(f'{status_check} status check')


if __name__ == "__main__":
    log()
