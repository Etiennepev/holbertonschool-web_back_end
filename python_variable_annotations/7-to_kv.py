#!/usr/bin/env python3
"""7-to_kv.py"""
from typing import Union


def to_kv(k: str, v: Union[int, float]) -> tuple:
	"""Returns a tuple with k an v ** 2"""
	return (k, v ** 2)
