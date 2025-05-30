#!/usr/bin/env python3
"""9-insert_school.py"""


def insert_school(mongo_collection, **kwargs):
	"""Insert a new document on kwargs"""
	result = mongo_collection.insert_one(kwargs)
	return result.inserted_id
