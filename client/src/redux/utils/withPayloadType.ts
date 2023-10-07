function withPayloadType<T>() {
    return (t: T) => ({ payload: t });
}

export default withPayloadType;
